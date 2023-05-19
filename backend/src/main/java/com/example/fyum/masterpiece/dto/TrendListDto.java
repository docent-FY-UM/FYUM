package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Trend;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Data
@NoArgsConstructor
public class TrendListDto {

    private int id;
    private String trendKr;
    private String trendOrigin;
    private String description;
    private String imgSrc;


    private List<MasterpieceListDto> content;
    private Pageable pageable;
    private int number;
    private long totalElements;
    private int totalPages;
    private int size;
    private int numberOfElements;


    public TrendListDto(Page<MasterpieceListDto> page, Trend trend) {
        this.id = trend.getId();
        this.trendKr = trend.getTrendKr();
        this.trendOrigin = trend.getTrendOrigin();
        this.description = trend.getDescription();
        this.imgSrc = trend.getImgSrc();

        this.content = page.getContent();
        this.pageable = page.getPageable();
        this.number = page.getNumber();
        this.totalElements = page.getTotalElements();
        this.totalPages = page.getTotalPages();
        this.size = page.getSize();
        this.numberOfElements = page.getNumberOfElements();
    }
}
