package com.example.fyum.member.service;

import com.example.fyum.config.KakaoProfile;
import com.example.fyum.config.OauthToken;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    @Value("${kakao.client_id}")
    private String client_id;

    @Value("${kakao.redirect_uri}")
    private String redirect_uri;


    public OauthToken getAccessToken(String code) {
        System.out.println("-------------------------");
        //(2)
        RestTemplate rt = new RestTemplate();

        //(3)
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //(4)
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", client_id);
        params.add("redirect_uri", redirect_uri);
        params.add("code", code);
//        params.add("client_secret", "{시크릿 키}"); // 생략 가능!

        //(5)
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);
        System.out.print("5to6");
        //(6)
        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        //(7)
        ObjectMapper objectMapper = new ObjectMapper();
        OauthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return oauthToken; //(8)
    }

    public Member saveMember(String token) {

        //(1)
        KakaoProfile profile = showprofile(token);

        //(2)
        Member member = memberRepository.findByKakaoId(String.valueOf(profile.getId()));

        //(3)
        if(member == null) {
            member = member.builder()
                    .kakaoId(String.valueOf(profile.getId()))
                    .name(profile.getProperties().getNickname())
                    .build();

            memberRepository.save(member);
        }

        return member;
    }

    public KakaoProfile showprofile(String token){
        RestTemplate rt = new RestTemplate();

        //(1-3)
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token); //(1-4)
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //(1-5)
        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);

        //(1-6)
        // Http 요청 (POST 방식) 후, response 변수에 응답을 받음
        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        System.out.println(kakaoProfileResponse.getBody());///


        //(1-7)
        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(kakaoProfileResponse.getBody(), KakaoProfile.class);

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        return kakaoProfile;
    }


//    public Member saveMember(String token) {
//
//        //(1)
//        Long profile = findId(token);
//
//        //(2)
//        User user = userRepository.findByKakaoEmail(profile.getKakao_account().getEmail());
//
//        //(3)
//        if(user == null) {
//            user = User.builder()
//                    .kakaoId(profile.getId())
//                    //(4)
//                    .kakaoProfileImg(profile.getKakao_account().getProfile().getProfile_image_url())
//                    .kakaoNickname(profile.getKakao_account().getProfile().getNickname())
//                    .kakaoEmail(profile.getKakao_account().getEmail())
//                    //(5)
//                    .userRole("ROLE_USER").build();
//
//            userRepository.save(user);
//        }
//
//        return user;
//    }
//
//
//    //(1-1)
//    public Long findId(String token) {
//
//        //(1-2)
//        RestTemplate rt = new RestTemplate();
//
//        //(1-3)
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Authorization", "Bearer " + token); //(1-4)
//        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//
//        //(1-5)
//        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
//                new HttpEntity<>(headers);
//
//        //(1-6)
//        // Http 요청 (POST 방식) 후, response 변수에 응답을 받음
//        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
//                "https://kapi.kakao.com/v2/user/me",
//                HttpMethod.POST,
//                kakaoProfileRequest,
//                String.class
//        );
//
//        //(1-7)
//        ObjectMapper objectMapper = new ObjectMapper();
//        Long kakaoProfile = null;
//        try {
//            kakaoProfile = objectMapper.readValue(kakaoProfileResponse.getBody().getId(), KakaoProfile.class);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//        return kakaoProfile;
//    }


}
