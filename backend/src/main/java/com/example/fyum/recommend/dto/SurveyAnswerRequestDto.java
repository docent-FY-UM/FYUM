package com.example.fyum.recommend.dto;

import lombok.Data;

import java.util.List;

@Data
public class SurveyAnswerRequestDto {
    private List<Integer> choosed;
}
