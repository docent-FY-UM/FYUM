package com.example.fyum.exhibition.repository;

import com.example.fyum.exhibition.entity.Exhibition;
import com.example.fyum.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExhibitionRepository extends JpaRepository<Exhibition, Integer>{

    Exhibition findByMember(Member member);

}
