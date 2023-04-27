package com.example.fyum.config;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.example.fyum.member.service.MemberService;
import com.example.fyum.utils.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    private final MemberService memberService;
    private final String key;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info("authorization : {}", authorization);

        if (authorization == null || !authorization.startsWith("Bearer ")) {
            if(request.getServletPath().equals("/members/oauth/token")){
                filterChain.doFilter(request,response);
            }else {
                log.error("authorization 이 없습니다.");
                request.setAttribute(JwtProperties.HEADER_STRING, "Token이 없습니다.");
                String errorCode = "Token이 없습니다.";
                final Map<String, Object> body = new HashMap<>();
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                // 응답 객체 초기화
                body.put("status", 402);
                body.put("error", "Empty");
                body.put("message", errorCode);
                body.put("path", request.getServletPath());
                final ObjectMapper mapper = new ObjectMapper();
                // response 객체에 응답 객체를 넣어줌
                mapper.writeValue(response.getOutputStream(), body);
                response.setStatus(HttpServletResponse.SC_OK);

                // filterChain.doFilter(request, response);
            }
        }
        else{
            String token = authorization.split(" ")[1];
            String Id = "";
            try {
                // 토큰이 만료기간 남았는지 여부
                if(JwtUtil.isExpired(token,key)){
                    log.error("Token이 만료되었습니다.");
                    // filterChain.doFilter(request, response);

                }else{
                    // id 꺼내기
                    Id = JwtUtil.getMemberId(token, key);

                    //권한 부여
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(Id, null, List.of(new SimpleGrantedAuthority("USER")));
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }

            } catch (ExpiredJwtException e) {
                e.printStackTrace();
                request.setAttribute(JwtProperties.HEADER_STRING, "토큰이 만료되었습니다.");

            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute(JwtProperties.HEADER_STRING, "유효하지 않은 토큰입니다.");

            }
            filterChain.doFilter(request, response);
        }
        // 토큰 꺼내기



//        try {
//            Id= JwtUtil.getMemberId(token,key);
//
//        } catch (ExpiredJwtException e) {
//            e.printStackTrace();
//            request.setAttribute(JwtProperties.HEADER_STRING, "토큰이 만료되었습니다.");
//        } catch (JWTVerificationException e) {
//            e.printStackTrace();
//            request.setAttribute(JwtProperties.HEADER_STRING, "유효하지 않은 토큰입니다.");
//        }


    }
}
