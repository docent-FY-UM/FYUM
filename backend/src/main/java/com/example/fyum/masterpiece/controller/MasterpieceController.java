package com.example.fyum.masterpiece.controller;

import com.example.fyum.masterpiece.dto.CategoryDto;
import com.example.fyum.masterpiece.dto.MasterpieceDto;
import com.example.fyum.masterpiece.dto.MasterpieceListDto;
import com.example.fyum.masterpiece.dto.PainterListDto;
import com.example.fyum.masterpiece.dto.TrendListDto;
import com.example.fyum.masterpiece.service.MasterpieceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/paintings")
public class MasterpieceController {

    private final MasterpieceService masterpieceService;

    @GetMapping("/painters")
    public ResponseEntity<Page<CategoryDto>> getPainters(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> painters = masterpieceService.getPainters(page);

        return new ResponseEntity<>(painters, HttpStatus.OK);
    }

    @GetMapping("/painters/{painterId}")
    public ResponseEntity<PainterListDto> getMasterpiecesByPainter(@PathVariable int painterId,
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        PainterListDto result = masterpieceService.getMasterpiecesByPainter(painterId, page);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/themes")
    public ResponseEntity<Page<CategoryDto>> getThemes(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> themes = masterpieceService.getThemes(page);

        return new ResponseEntity<>(themes, HttpStatus.OK);
    }

    @GetMapping("/themes/{themeId}")
    public ResponseEntity<Page<MasterpieceListDto>> getMasterpiecesByTheme(
        @PathVariable int themeId, @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<MasterpieceListDto> result = masterpieceService.getMasterpiecesByTheme(themeId, page);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/trends")
    public ResponseEntity<Page<CategoryDto>> getTrends(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> trends = masterpieceService.getTrends(page);

        return new ResponseEntity<>(trends, HttpStatus.OK);
    }

    @GetMapping("/trends/{trendId}")
    public ResponseEntity<TrendListDto> getMasterpiecesByTrend(@PathVariable int trendId,
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        TrendListDto result = masterpieceService.getMasterpiecesByTrend(trendId, page);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/detail/{paintingId}")
    public ResponseEntity<MasterpieceDto> getMasterpieceDetail(@PathVariable int paintingId,
        Authentication authentication) {
        MasterpieceDto painting = masterpieceService.getDetail(authentication.getName(),
            paintingId);

        return new ResponseEntity<>(painting, HttpStatus.OK);
    }

    @GetMapping("/curation/{paintingId}")
    public ResponseEntity<String> getCuration(@PathVariable int paintingId) {
        String result = masterpieceService.getCuration(paintingId);
        if (result == null) {
            result = "큐레이션이 없습니다.";
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
