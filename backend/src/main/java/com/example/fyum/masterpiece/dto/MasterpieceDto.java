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


    public MasterpieceDto(Masterpiece masterpiece, Boolean wishStatus, Boolean exhibitionStatus) {
        this.paintingId = masterpiece.getId();
        this.imgSrc = masterpiece.getImgSrc();
        this.titleKr = masterpiece.getTitleKr();
        this.titleOrigin = masterpiece.getTitleOrigin();
        this.paintedAt = masterpiece.getPaintedAt();
        this.paintingType = masterpiece.getPaintingType();
        this.technique = masterpiece.getTechnique();
        if (null != masterpiece.getDescription()) {
            String originDesc = masterpiece.getDescription();
            String[] desc = originDesc.split("[.]", 6);
            StringBuilder shortDesc = new StringBuilder();
            for (int i = 0; i < 5; i++) {
                shortDesc.append(desc[i]).append(".");
            }
            this.description = shortDesc.toString();
        }
        if (null != masterpiece.getPainter()) {
            Painter painter = masterpiece.getPainter();
            this.painterId = painter.getId();
            this.painterKr = painter.getPainterKr();
            this.painterOrigin = painter.getPainterOrigin();
        }
        if (null != masterpiece.getTrend()) {
            this.trend = masterpiece.getTrend().getTrendKr();
        }
        if (null != masterpiece.getTheme()) {
            this.theme = masterpiece.getTheme().getThemeKr();
        }
        this.wishStatus = wishStatus;
        this.exhibitionStatus = exhibitionStatus;
    }

}
