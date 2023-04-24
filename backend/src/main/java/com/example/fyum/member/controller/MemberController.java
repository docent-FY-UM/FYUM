package com.example.fyum.member.controller;

import com.example.fyum.config.OauthToken;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/oauth/token") // (3)
    public ResponseEntity<Member> getLogin(@RequestParam("code") String code) { //(4)

        // 넘어온 인가 코드를 통해 access_token 발급 //(5)
        OauthToken oauthToken = memberService.getAccessToken(code);

        Member member = memberService.saveMember(oauthToken.getAccess_token());

        return ResponseEntity.ok(member);
    }
    @GetMapping("/oauth/login")// 리다이렉트 받을 api
    public void getCode(@RequestParam("code") String code){
        System.out.print(code);
    }

}


