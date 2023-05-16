package com.example.fyum.recommend.dto;

import com.example.fyum.masterpiece.entity.Masterpiece;
import lombok.Data;

@Data
public class RecommendResponseDto {

    private int paintingId;
    private String titleKr;
    private String title;
    private String imgSrc;

    public RecommendResponseDto(Masterpiece ob) {
        this.paintingId = ob.getId();
        this.titleKr = ob.getTitleKr();
        if (ob.getTitleOrigin() == null) {
            this.title = ob.getTitleKr();
        } else {
            this.title = ob.getTitleOrigin();
        }
        this.imgSrc = ob.getImgSrc();
    }

}
