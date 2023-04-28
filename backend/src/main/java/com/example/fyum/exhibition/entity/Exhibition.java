package com.example.fyum.exhibition.entity;

import com.example.fyum.config.BaseEntity;
import com.example.fyum.config.Painting;
import com.example.fyum.member.entity.Member;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Exhibition extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting1;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting2;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting3;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting4;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting5;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting6;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting7;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting8;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting9;
    @ManyToOne(fetch = FetchType.LAZY)
    private Painting painting10;

}
