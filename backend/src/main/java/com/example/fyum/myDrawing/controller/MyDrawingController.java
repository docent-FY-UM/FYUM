package com.example.fyum.myDrawing.controller;

import com.example.fyum.myDrawing.dto.MyDrawingDetailDto;
import com.example.fyum.myDrawing.dto.MyDrawingRequestDto;
import com.example.fyum.myDrawing.dto.MyDrawingResponseDto;
import com.example.fyum.myDrawing.service.MyDrawingService;
import com.example.fyum.myDrawing.service.MyPictureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/mypaintings")
public class MyDrawingController {

    private final MyDrawingService myDrawingService;

    private final MyPictureService myPictureService;

    @PostMapping("/save")
    public ResponseEntity<MyDrawingResponseDto> saveMyDrawing(@RequestBody MyDrawingRequestDto dto, Authentication authentication){
        return ResponseEntity.ok(myDrawingService.saveMyDrawing(dto,authentication.getName()));
    }


    @PostMapping("/picture/save")
    public ResponseEntity<MyDrawingResponseDto> saveMyPicture(@RequestBody MyDrawingRequestDto dto, Authentication authentication){
        return ResponseEntity.ok(myPictureService.saveMyPicture(dto,authentication.getName()));
    }

    @GetMapping("")
    public ResponseEntity<List<MyDrawingResponseDto>> getMyDrawing(Authentication authentication){
        return ResponseEntity.ok(myDrawingService.getMyDrawing(authentication.getName()));
    }

    @GetMapping("/picture")
    public ResponseEntity<List<MyDrawingResponseDto>> getMyPicture(Authentication authentication){
        return ResponseEntity.ok(myPictureService.getMyPicture(authentication.getName()));
    }

    @GetMapping("/detail/{paintingId}")
    public ResponseEntity<MyDrawingDetailDto> getDetailMyDrawing(@PathVariable int paintingId, Authentication authentication){
        return ResponseEntity.ok(myDrawingService.getDetail(paintingId,authentication.getName()));
    }

    @GetMapping("picture/detail/{paintingId}")
    public ResponseEntity<MyDrawingDetailDto> getDetailMyPicture(@PathVariable int paintingId, Authentication authentication){
        return ResponseEntity.ok(myPictureService.getDetail(paintingId,authentication.getName()));
    }

}
