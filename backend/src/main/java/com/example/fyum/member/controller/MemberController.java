package com.example.fyum.member.controller;

import com.example.fyum.config.JwtProperties;
import com.example.fyum.config.KakaoProfile;
import com.example.fyum.config.OauthToken;
import com.example.fyum.member.dto.MemberResponseDto;
import com.example.fyum.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/oauth/token")
    public ResponseEntity<MemberResponseDto> getLogin(@RequestParam("code") String code) {

        OauthToken oauthToken = memberService.getAccessToken(code);

        String jwtToken = memberService.saveMemberAndGetToken(oauthToken.getAccess_token());

        HttpHeaders headers = new HttpHeaders();
        headers.add(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        headers.add("Access-Control-Expose-Headers", "Authorization");

        KakaoProfile kakaoProfile = memberService.showprofile(oauthToken.getAccess_token());
        MemberResponseDto memberResponseDto = new MemberResponseDto();
        memberResponseDto.setNickname(kakaoProfile.getProperties().getNickname());

        memberResponseDto.setSurvey(memberService.isSurvey(String.valueOf(kakaoProfile.getId())));
        memberResponseDto.setRoomCode(
            memberService.getMember(String.valueOf(kakaoProfile.getId())).getRoomCode());

        return new ResponseEntity<MemberResponseDto>(memberResponseDto, headers,
            HttpStatus.valueOf(200));
    }


    @GetMapping("/nickname")
    public ResponseEntity<String> getNickName(Authentication authentication) {
        String nickname = memberService.getNickName(authentication.getName());
        return ResponseEntity.ok(nickname);
    }

    @GetMapping("/roomcode/{roomcode}")
    public ResponseEntity<String> getIfRoomCode(@PathVariable String roomcode,
        Authentication authentication) {
        String roomCode = memberService.ifRoomCode(roomcode);
        return new ResponseEntity<>(roomCode, HttpStatus.OK);
    }

    @PostMapping("/tokennum")
    public ResponseEntity<Boolean> getIfRoomCodeSameToken(@RequestParam("num") String roomCode, @RequestParam("token") String token){
        Boolean temp = memberService.ifRoomCodeSameTocken(roomCode,token);
        return ResponseEntity.ok(temp);
    }


}


