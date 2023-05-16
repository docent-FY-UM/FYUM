package com.example.fyum.wishlist.entity;


import com.example.fyum.masterpiece.entity.Masterpiece;

import com.example.fyum.member.entity.Member;

import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "painting_id")
    private Masterpiece masterpiece;

    @Builder
    public Wishlist(Member member, Masterpiece masterpiece) {
        this.member = member;
        this.masterpiece = masterpiece;
    }


}
