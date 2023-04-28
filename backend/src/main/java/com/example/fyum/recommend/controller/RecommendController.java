package com.example.fyum.recommend.controller;

import com.example.fyum.recommend.dto.RecommendResponseDto;
import com.example.fyum.recommend.dto.SurveyAnswerRequestDto;
import com.example.fyum.recommend.dto.SurveyResopnseDto;
import com.example.fyum.recommend.entity.SurveyAnswer;
import com.example.fyum.recommend.repository.SurveyAnswerRepository;
import com.example.fyum.recommend.service.RecommendService;
import com.example.fyum.recommend.service.SurveyAnswerService;
import com.example.fyum.recommend.service.SurveyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/recommends")
public class RecommendController {
    private final SurveyService surveyService;

    private final SurveyAnswerService surveyAnswerService;

    private final RecommendService recommendService;
    //설문 조사에 필요한 그림들 보내주기
    @GetMapping("/surveys")
    public ResponseEntity<List<SurveyResopnseDto>> getSurveysQ(){
        return ResponseEntity.ok(surveyService.getSurvey());
    }
    //설문조사 응답 보내기
    @PostMapping("/surveys")
    public ResponseEntity postServeysA(@RequestBody SurveyAnswerRequestDto surveyAnswerRequestDto, Authentication authentication){
        surveyAnswerService.postServeyAnswer(surveyAnswerRequestDto.getChoosed(),authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/recommends")
    public ResponseEntity<List<RecommendResponseDto>> getRecommends(Authentication authentication){
        return ResponseEntity.ok(recommendService.getRecommends(authentication.getName()));
    }
}
