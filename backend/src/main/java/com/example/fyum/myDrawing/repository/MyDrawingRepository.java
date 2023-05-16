package com.example.fyum.myDrawing.repository;

import com.example.fyum.member.entity.Member;
import com.example.fyum.myDrawing.entity.MyDrawing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyDrawingRepository extends JpaRepository<MyDrawing, Integer> {

    List<MyDrawing> findByMember(Member member);

    MyDrawing findByMemberAndId(Member member, int Id);
}
