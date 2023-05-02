package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Masterpiece;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MasterpieceListDto {

    private int paintingId;
    private String imgSrc;
    private String titleKr;
    private String titleOrigin;

    public MasterpieceListDto(Masterpiece masterpiece) {
        this.paintingId = masterpiece.getId();
        this.imgSrc = masterpiece.getImgSrc();
        this.titleKr = masterpiece.getTitleKr();
        this.titleOrigin = masterpiece.getTitleOrigin();
    }

}
