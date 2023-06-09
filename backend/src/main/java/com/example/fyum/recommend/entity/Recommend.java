package com.example.fyum.recommend.entity;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Recommend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting1;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting2;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting3;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting4;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting5;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting6;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting7;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting8;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting9;
    @ManyToOne(fetch = FetchType.LAZY)
    private Masterpiece painting10;

    @Builder
    public Recommend(Member member) {
        this.member = member;
    }
}
