package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Painter;
import com.example.fyum.masterpiece.entity.Theme;
import com.example.fyum.masterpiece.entity.Trend;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CategoryDto {

    int id;
    String nameKr;
    String nameOrigin;
    String imgSrc;

    public CategoryDto(Painter painter) {
        this.id = painter.getId();
        this.nameKr = painter.getPainterKr();
        this.nameOrigin = painter.getPainterOrigin();
        this.imgSrc = painter.getImgSrc();
    }

    public CategoryDto(Theme theme) {
        this.id = theme.getId();
        this.nameKr = theme.getThemeKr();
        this.nameOrigin = theme.getThemeKr();
        this.imgSrc = theme.getImgSrc();
    }

    public CategoryDto(Trend trend) {
        this.id = trend.getId();
        this.nameKr = trend.getTrendKr();
        this.nameOrigin = trend.getTrendOrigin();
        this.imgSrc = trend.getImgSrc();
    }


}
