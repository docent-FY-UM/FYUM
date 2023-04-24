package com.example.fyum.member.repository;

import com.example.fyum.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    public Member findByKakaoId(String kakao_id);

}
