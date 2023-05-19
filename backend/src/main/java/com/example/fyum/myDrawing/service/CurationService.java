package com.example.fyum.myDrawing.service;

import com.example.fyum.myDrawing.entity.MyDrawing;
import com.example.fyum.myDrawing.entity.MyPicture;
import com.example.fyum.myDrawing.repository.MyDrawingRepository;
import com.example.fyum.myDrawing.repository.MyPictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;

import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Base64;


import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;


import java.util.*;


import org.springframework.http.HttpHeaders;

@Service
@RequiredArgsConstructor
public class CurationService {

    private final MyDrawingRepository myDrawingRepository;
    private final MyPictureRepository myPictureRepository;

    JsonParser parser = new JsonParser();
    @Value("${imagga.key}")
    String immagaKey;
    @Value("${imagga.secret}")
    String immagaSecret;
    @Value("${gpt.key}")
    String gptKey;
    @Value("${google.key}")
    String googleKey;

    void getImagga(int pId, String dtype) throws Exception {
        String image_url;
        String description;
        MyDrawing myDrawing = null;
        MyPicture myPicture = null;

        if (dtype.equals("MD")) {
            myDrawing = myDrawingRepository.findById(pId).orElseThrow(NullPointerException::new);
            image_url = myDrawing.getImgSrc();
            description = myDrawing.getDescription();
        } else {
            myPicture = myPictureRepository.findById(pId).orElseThrow(NullPointerException::new);
            image_url = myPicture.getImgSrc();
            description = myPicture.getDescription();
        }

        String credentialsToEncode = immagaKey + ":" + immagaSecret;
        String basicAuth = Base64.getEncoder()
            .encodeToString(credentialsToEncode.getBytes(StandardCharsets.UTF_8));

        String endpoint_url = "https://api.imagga.com/v2/tags";

        String url = endpoint_url + "?image_url=" + image_url;
        URL urlObject = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) urlObject.openConnection();

        connection.setRequestProperty("Authorization", "Basic " + basicAuth);

        int responseCode = connection.getResponseCode();

        BufferedReader connectionInput = new BufferedReader(
            new InputStreamReader(connection.getInputStream()));

        String jsonResponse = connectionInput.readLine();

        connectionInput.close();

        JsonElement element = parser.parse(jsonResponse);
        JsonArray a = element.getAsJsonObject().get("result").getAsJsonObject().get("tags")
            .getAsJsonArray();
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (JsonElement je : a) {
            sb.append(
                "{confidence:" + Math.round(je.getAsJsonObject().get("confidence").getAsDouble())
                    + ", tag:" + je.getAsJsonObject().get("tag").getAsJsonObject().get("en")
                    + "}, ");
        }
        sb.append("]");

        String curation = gptgo(description + sb.toString());

        if (dtype.equals("MD")) {
            myDrawing.setCuration(curation);
            myDrawingRepository.save(myDrawing);
        } else {
            myPicture.setCuration(curation);
            myPictureRepository.save(myPicture);
        }

    }


    String gptgo(String gogogo) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + gptKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "text-davinci-003");
        requestBody.put("prompt",
            "I will give you the comments from the artist and factors and probabilities for the picture, so please write an analysis in 5 sentences."
                + gogogo);
        requestBody.put("temperature", 1.0f);
        requestBody.put("max_tokens", 1000);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity(
            "https://api.openai.com/v1/completions", requestEntity, Map.class);
        ArrayList al = (ArrayList) response.getBody().get("choices");
        LinkedHashMap<String, String> lhm = (LinkedHashMap<String, String>) al.get(0);
        String tt = lhm.get("text");

        String apiKey = googleKey;

        Translate translate = TranslateOptions.newBuilder().setApiKey(apiKey).build().getService();

        String text = tt;

        String sourceLanguage = "en";
        String targetLanguage = "ko";

        Translation translation = translate.translate(text,
            Translate.TranslateOption.sourceLanguage(sourceLanguage),
            Translate.TranslateOption.targetLanguage(targetLanguage));

        String resultText = translation.getTranslatedText();
        resultText = resultText.replace("&quot;", "");
        resultText = resultText.replace("&#39;", "");

        return resultText;
    }

}
