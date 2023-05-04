package com.example.fyum.myDrawing.dto;

import lombok.Data;

@Data
public class MyDrawingDetailDto {
    int paintingId;

    String title;

    String curation;

    String discription;

    String imgSrc;

    Boolean exhibitionStatus;
}
