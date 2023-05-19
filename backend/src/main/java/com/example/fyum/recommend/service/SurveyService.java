package com.example.fyum.recommend.service;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.repository.MasterpieceRepository;
import com.example.fyum.recommend.dto.SurveyResopnseDto;
import com.example.fyum.recommend.entity.Survey;
import com.example.fyum.recommend.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final MasterpieceRepository masterpieceRepository;

    public List<SurveyResopnseDto> getSurvey() {
        List<Survey> rlist = surveyRepository.findAll();
        List<SurveyResopnseDto> list = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            SurveyResopnseDto temp = new SurveyResopnseDto();
            Optional<Masterpiece> mp = masterpieceRepository.findById(rlist.get(i).getPainting());
            temp.setImgSrc(mp.get().getImgSrc());
            temp.setPaintingId(mp.get().getId());
            list.add(temp);
        }

        return list;
    }

}
