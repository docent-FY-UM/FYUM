package com.example.fyum.member.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.fyum.config.JwtProperties;
import com.example.fyum.config.KakaoProfile;
import com.example.fyum.config.OauthToken;
import com.example.fyum.config.Painting;
import com.example.fyum.exhibition.entity.Exhibition;
import com.example.fyum.exhibition.repository.ExhibitionRepository;
import com.example.fyum.masterpiece.repository.PaintingRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.recommend.entity.Recommend;
import com.example.fyum.recommend.repository.RecommendRepository;
import com.example.fyum.utils.JwtUtil;
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

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ExhibitionRepository exhibitionRepository;

    private final RecommendRepository recommendRepository;

    @Value("${kakao.client_id}")
    private String client_id;

    @Value("${kakao.redirect_uri}")
    private String redirect_uri;
    @Value("${jwt.key}")
    private String key;

    //인가 코드로 카카오톡 엑세스 토큰 받기
    public OauthToken getAccessToken(String code) {

        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", client_id);
        params.add("redirect_uri", redirect_uri);
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);
;

        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        OauthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OauthToken.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return oauthToken; //(8)
    }

    // 카카오 엑세스 토큰으로 정보 받아오기
    public KakaoProfile showprofile(String token){
        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token); //(1-4)
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);


        ResponseEntity<String> kakaoProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile kakaoProfile = null;
        try {
            kakaoProfile = objectMapper.readValue(kakaoProfileResponse.getBody(), KakaoProfile.class);

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoProfile;
    }


    public String saveMemberAndGetToken(String token) {
        KakaoProfile profile = showprofile(token);

        Member member = memberRepository.findByKakaoId(String.valueOf(profile.getId()));
        if(member == null) {
            member = member.builder()
                    .kakaoId(String.valueOf(profile.getId()))
                    .name(profile.getProperties().getNickname())
                    .build();
            memberRepository.save(member);

            Exhibition exhibition = Exhibition.builder()
                    .member(member)
                    .build();
            Painting painting = new Painting();
            painting.setImgSrc("https://raw.githubusercontent.com/okanekudasai/jarArchive/master/backji.png");
            exhibition.setPainting1(painting);
            exhibitionRepository.save(exhibition);

            Recommend recommend = Recommend.builder()
                    .member(member)
                    .build();

            recommendRepository.save(recommend);

            Member temp = memberRepository.findByKakaoId(String.valueOf(profile.getId()));
            temp.setRoomCode(roomCode(temp.getId()));

            memberRepository.save(temp);
        }

        return createToken(member);
    }
    // 토큰 생성
    public String createToken(Member member) { //(2-1)

        return JwtUtil.creatJwt(member.getKakaoId(),key,60l*60*24*1000);
    }

    public Member getMember(String id) {

        Member member = memberRepository.findByKakaoId(id);

        return member;
    }

    public Boolean isSurvey(String kakaoId){
        Member member=memberRepository.findByKakaoId(kakaoId);
        Recommend recommend = recommendRepository.findByMember(member);


        if(recommend.getPainting1() == null){
            return false;
        }

        return true;
    }
    //닉네임 반환 함수
    public String getNickName (String kakao_id){
        Member member = memberRepository.findByKakaoId(kakao_id);
        return member.getName();
    }





    // 방코드 반환
    public String roomCode(int id){
        String temp = String.valueOf(id);
        return String.valueOf(temp.hashCode());
    }

    public String ifRoomCode(String roomCode){
        Optional<Member> member = memberRepository.findByRoomCode(roomCode);
        if(!member.isPresent()){
            return "error : 닉네임이 없습니다.";
        }else{
            return member.get().getName();
        }
    }

    public Boolean ifRoomCodeSameTocken(String roomCode, String token){
        String kakaoId = JwtUtil.getMemberId(token,key);
        Member member = memberRepository.findByKakaoId(kakaoId);
        if(member.getRoomCode().equals(roomCode)){
            return true;
        }
        return false;
    }

}
