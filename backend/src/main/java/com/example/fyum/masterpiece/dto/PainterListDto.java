package com.example.fyum.masterpiece.dto;

import com.example.fyum.masterpiece.entity.Painter;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Data
@NoArgsConstructor
public class PainterListDto {
    private int id;
    private String painterKr;
    private String painterOrigin;
    private String description;
    private String imgSrc;


    private List<MasterpieceListDto> content;
    private Pageable pageable;
    private int number;
    private long totalElements;
    private int totalPages;
    private int size;
    private int numberOfElements;


    public PainterListDto(Page<MasterpieceListDto> masterpieceLists, Painter painter) {
        this.id = painter.getId();
        this.painterKr = painter.getPainterKr();
        this.painterOrigin = painter.getPainterOrigin();
        if (null != painter.getDescription()) {
            String[] desc = painter.getDescription().split("[.]", 6);
            StringBuilder shortDesc = new StringBuilder();
            for (int i = 0; i < 5; i++) {
                shortDesc.append(desc[i]).append(".");
            }
            this.description = shortDesc.toString();
        }
        this.imgSrc = painter.getImgSrc();

        this.content = masterpieceLists.getContent();
        this.pageable = masterpieceLists.getPageable();
        this.totalElements = masterpieceLists.getTotalElements();
        this.totalPages = masterpieceLists.getTotalPages() + 1;
        this.number = masterpieceLists.getNumber() + 1;
        this.size = masterpieceLists.getSize();
        this.numberOfElements = masterpieceLists.getNumberOfElements();
    }

}
