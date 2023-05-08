package com.example.fyum.exhibition.controller;

import com.example.fyum.exhibition.dto.ExhibitionRequestDto;
import com.example.fyum.exhibition.dto.ExhibitionResponseDto;
import com.example.fyum.exhibition.service.ExhibitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/exhibitions")
public class ExhibitionController {
    private final ExhibitionService exhibitionService;
    @PostMapping("")
    public ResponseEntity<Integer> postExhibitions(@RequestBody ExhibitionRequestDto dto, Authentication authentication){
        return ResponseEntity.ok(exhibitionService.postExhibition(authentication.getName(),dto.getPaintingId()));
    }
    @PutMapping("")
    public ResponseEntity outExhibitions(@RequestBody ExhibitionRequestDto dto, Authentication authentication){
        exhibitionService.outExhi(dto.getPaintingId(), authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<ExhibitionResponseDto>> getExhibition(Authentication authentication){
        return ResponseEntity.ok(exhibitionService.getExhi(authentication.getName()));
    }

    @GetMapping("/Other/{id}")
    public ResponseEntity<List<ExhibitionResponseDto>> getOtherExhibition(@PathVariable int id){
        return ResponseEntity.ok(exhibitionService.getOtherExhi(id));
    }
}
