package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.entity.Painter;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MasterpieceDto {

    private int paintingId;
    private String imgSrc;
    private String titleKr;
    private String titleOrigin;
    private String paintedAt;
    private String paintingType;
    private String technique;
    private String description;
    private String trend;
    private int painterId;
    private String painterKr;
    private String painterOrigin;
    private String theme;
    private Boolean wishStatus;
    private Boolean exhibitionStatus;

    public MasterpieceDto(Masterpiece masterpiece) {
        Painter painter = masterpiece.getPainter();

        this.paintingId = masterpiece.getId();
        this.imgSrc = masterpiece.getImgSrc();
        this.titleKr = masterpiece.getTitleKr();
        this.titleOrigin = masterpiece.getTitleOrigin();
        this.paintedAt = masterpiece.getPaintedAt();
        this.paintingType = masterpiece.getPaintingType();
        this.technique = masterpiece.getTechnique();
        this.description = masterpiece.getDescription();
        this.painterId = painter.getId();
        this.painterKr = painter.getPainterKr();
        this.painterOrigin = painter.getPainterOrigin();
//        this.trend = masterpiece.getTrend().getTrendKr();
//        this.theme = masterpiece.getTheme().getThemeKr();
//        this.wishStatus = wishStatus;
//        this.exhibitionStatus = exhibitionStatus;
    }

}
