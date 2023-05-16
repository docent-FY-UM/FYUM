package com.example.fyum.recommend.service;

import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.recommend.dto.RecommendResponseDto;
import com.example.fyum.recommend.entity.Recommend;
import com.example.fyum.recommend.repository.RecommendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final RecommendRepository recommendRepository;
    private final MemberRepository memberRepository;

    public List<RecommendResponseDto> getRecommends(String kakaoId) {
        int id = memberRepository.findByKakaoId(kakaoId).getId();
        Optional<Recommend> temp = recommendRepository.findById(id);
        List<RecommendResponseDto> res = new ArrayList<>();

        res.add(new RecommendResponseDto(temp.get().getPainting1()));
        res.add(new RecommendResponseDto(temp.get().getPainting2()));
        res.add(new RecommendResponseDto(temp.get().getPainting3()));
        res.add(new RecommendResponseDto(temp.get().getPainting4()));
        res.add(new RecommendResponseDto(temp.get().getPainting5()));
        res.add(new RecommendResponseDto(temp.get().getPainting6()));
        res.add(new RecommendResponseDto(temp.get().getPainting7()));
        res.add(new RecommendResponseDto(temp.get().getPainting8()));
        res.add(new RecommendResponseDto(temp.get().getPainting9()));
        res.add(new RecommendResponseDto(temp.get().getPainting10()));

        return res;
    }

}
