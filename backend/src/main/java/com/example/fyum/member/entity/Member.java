package com.example.fyum.member.entity;

import com.example.fyum.config.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;
    private String kakaoId;
    private String name;

    private String roomCode;

    @Builder
    public Member(String kakaoId, String name) {
        this.kakaoId = kakaoId;
        this.name = name;
    }
}
