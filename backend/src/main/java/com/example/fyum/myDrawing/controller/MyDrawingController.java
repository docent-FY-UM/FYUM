package com.example.fyum.myDrawing.controller;

import com.example.fyum.myDrawing.dto.MyDrawingRequestDto;
import com.example.fyum.myDrawing.dto.MyDrawingResponseDto;
import com.example.fyum.myDrawing.service.MyDrawingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/mypaintings")
public class MyDrawingController {

    private final MyDrawingService myDrawingService;

    @PostMapping("/save")
    public ResponseEntity<MyDrawingResponseDto> saveMyDrawing(@RequestBody MyDrawingRequestDto dto, Authentication authentication){
        return ResponseEntity.ok(myDrawingService.saveMyDrawing(dto,authentication.getName()));
    }

}
