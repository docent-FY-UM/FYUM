package com.example.fyum.myDrawing.repository;

import com.example.fyum.member.entity.Member;

import com.example.fyum.myDrawing.entity.MyPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyPictureRepository extends JpaRepository<MyPicture, Integer> {

    List<MyPicture> findByMember(Member member);

    MyPicture findByMemberAndId(Member member, int Id);
}
