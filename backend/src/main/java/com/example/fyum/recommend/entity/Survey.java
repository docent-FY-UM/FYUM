package com.example.fyum.recommend.entity;

import lombok.Data;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Data
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT UNSIGNED")
    private int id;

    private int painting;

}
