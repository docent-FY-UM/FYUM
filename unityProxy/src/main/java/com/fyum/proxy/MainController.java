package com.fyum.proxy;

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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.nio.charset.StandardCharsets;
import java.util.*;

import java.net.URL;
import org.springframework.http.HttpHeaders;

@RestController
@CrossOrigin("*")
public class MainController {
    JsonParser parser = new JsonParser();
    @Value("${imagga.key}")
    String immagaKey;
    @Value("${imagga.secret}")
    String immagaSecret;
    @Value("${gpt.key}")
    String gptKey;
    @Value("${google.key}")
    String googleKey;
    @GetMapping("/test")
    String test() {
        return "Hello World!";
    }
    @PostMapping("/urlToBase64")
    String[] urlToBase64(@RequestParam("url") String url) {
        String [] urlArray = url.split(",");
        String [] baseArray = new String [urlArray.length];
        for (int i = 0; i < urlArray.length; i++) {
            RestTemplate restTemplate = new RestTemplate();
            byte[] imageBytes = restTemplate.getForObject(urlArray[i], byte[].class);
            baseArray[i] = Base64.getEncoder().encodeToString(imageBytes);
        }
        return baseArray;
    }

    @GetMapping("/loadScript")
    String test(@RequestParam("url") String receiveUrl) throws Exception {
        String credentialsToEncode = immagaKey + ":" + immagaSecret;
        String basicAuth = Base64.getEncoder().encodeToString(credentialsToEncode.getBytes(StandardCharsets.UTF_8));

        String endpoint_url = "https://api.imagga.com/v2/tags";
        String image_url = receiveUrl;

        String url = endpoint_url + "?image_url=" + image_url;
        URL urlObject = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) urlObject.openConnection();

        connection.setRequestProperty("Authorization", "Basic " + basicAuth);

        int responseCode = connection.getResponseCode();

        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader connectionInput = new BufferedReader(new InputStreamReader(connection.getInputStream()));

        String jsonResponse = connectionInput.readLine();

        connectionInput.close();

        System.out.println(jsonResponse);

        JsonElement element = parser.parse(jsonResponse);
        JsonArray a = element.getAsJsonObject().get("result").getAsJsonObject().get("tags").getAsJsonArray();
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (JsonElement je : a) {
            sb.append("{confidence:" + Math.round(je.getAsJsonObject().get("confidence").getAsDouble()) + ", tag:" + je.getAsJsonObject().get("tag").getAsJsonObject().get("en") + "}, ");
        }
        sb.append("]");
        System.out.println(sb.toString());
        return gptgo(sb.toString());
    }
    String gptgo(String gogogo) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + gptKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model","text-davinci-003");
        requestBody.put("prompt", "I will give you the factors and probabilities for the picture, so please write an analysis." + gogogo);
        requestBody.put("temperature", 1.0f);
        requestBody.put("max_tokens", 3000);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity("https://api.openai.com/v1/completions", requestEntity, Map.class);
        ArrayList al = (ArrayList) response.getBody().get("choices");
        LinkedHashMap<String, String> lhm = (LinkedHashMap<String, String>) al.get(0);
        String tt = lhm.get("text");
        System.out.println(lhm.get("text"));

        String apiKey = googleKey;
        // Translate 인스턴스를 만듭니다.
        Translate translate = TranslateOptions.newBuilder().setApiKey(apiKey).build().getService();

        // 번역할 텍스트를 지정합니다.
        String text = tt;

        // 번역할 언어와 번역될 언어를 지정합니다.
        String sourceLanguage = "en";
        String targetLanguage = "ko";

        // Translation 객체를 만들어서 번역을 실행합니다.
        Translation translation = translate.translate(text, Translate.TranslateOption.sourceLanguage(sourceLanguage),
                Translate.TranslateOption.targetLanguage(targetLanguage));

        String resultText = translation.getTranslatedText();
        resultText = resultText.replace("&quot;", "");
        resultText = resultText.replace("&#39;", "");
        // 번역된 결과를 출력합니다.
        return resultText;
    }
}
