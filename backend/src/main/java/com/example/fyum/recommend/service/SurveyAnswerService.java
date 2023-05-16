package com.example.fyum.recommend.service;

import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.recommend.entity.SurveyAnswer;
import com.example.fyum.recommend.repository.SurveyAnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SurveyAnswerService {

    final private SurveyAnswerRepository surveyAnswerRepository;

    final private MemberRepository memberRepository;

    public void postServeyAnswer(List<Integer> choosed, String kakaoid) {
        SurveyAnswer temp = new SurveyAnswer();
        temp.setMember(memberRepository.findByKakaoId(kakaoid));
        temp.setRes1(choosed.get(0));
        temp.setRes2(choosed.get(1));

        surveyAnswerRepository.save(temp);
    }
}
