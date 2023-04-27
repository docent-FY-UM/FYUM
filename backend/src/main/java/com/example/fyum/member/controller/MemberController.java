package com.example.fyum.member.controller;

import com.example.fyum.config.JwtProperties;
import com.example.fyum.config.KakaoProfile;
import com.example.fyum.config.OauthToken;
import com.example.fyum.member.dto.MemberResponseDto;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

@RestController
//@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping(value = "/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/oauth/token") // (3)
    public ResponseEntity<MemberResponseDto> getLogin(@RequestParam("code") String code) { //(4)

        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = memberService.getAccessToken(code);

        String jwtToken = memberService.saveMemberAndGetToken(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        headers.add("Access-Control-Expose-Headers","Authorization");
        //(4)

        KakaoProfile kakaoProfile = memberService.showprofile(oauthToken.getAccess_token());
        MemberResponseDto memberResponseDto = new MemberResponseDto();
        memberResponseDto.setNickname(kakaoProfile.getProperties().getNickname());

        return new ResponseEntity<MemberResponseDto>(memberResponseDto,headers,HttpStatus.valueOf(200));
    }
    @GetMapping("/oauth/login")// 리다이렉트 받을 api
    public void getCode(@RequestParam("code") String code){
        System.out.print(code);
    }

    @GetMapping("/test")
    public ResponseEntity<String> getCode(Authentication authentication){
        return ResponseEntity.ok(authentication.getName()+"hihi");
    }

    @GetMapping("/me")
    public ResponseEntity<Object> getCurrentUser(Authentication authentication) { //(1)
        System.out.println(4545454);
        //(2)
        Member member = memberService.getMember(authentication.getName());
        System.out.println(member.toString());
        //(3)
        return ResponseEntity.ok().body(member);
    }

}


