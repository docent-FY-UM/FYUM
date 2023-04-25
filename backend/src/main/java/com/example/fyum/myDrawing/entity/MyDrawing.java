package com.example.fyum.myDrawing.entity;

import com.example.fyum.config.Painting;
import com.example.fyum.member.entity.Member;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Entity
@DiscriminatorValue("MD")
public class MyDrawing extends Painting {
    private String title;
    private String curation;
    private String description;

    @ManyToOne(fetch= FetchType.LAZY)
    private Member member;
}
