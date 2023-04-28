package com.example.fyum.recommend.dto;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.recommend.entity.Recommend;
import lombok.Data;

@Data
public class RecommendResponseDto {
    private int paintingId;
    private String titleKr;
    private String titleOrigin;
    private String imgSrc;

    public RecommendResponseDto(Masterpiece ob){
        this.paintingId = ob.getId();
        this.titleKr = ob.getTitleKr();
        this.titleOrigin = ob.getTitleOrigin();
        this.imgSrc = ob.getImgSrc();
    }

}
