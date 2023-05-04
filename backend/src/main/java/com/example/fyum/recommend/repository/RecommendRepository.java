package com.example.fyum.recommend.repository;

import com.example.fyum.member.entity.Member;
import com.example.fyum.recommend.entity.Recommend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendRepository extends JpaRepository<Recommend,Integer> {

    Recommend findByMember(Member member);

}
