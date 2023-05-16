package com.example.fyum.recommend.entity;

import com.example.fyum.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class SurveyAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    private Member member;

    private int res1;
    private int res2;
}
