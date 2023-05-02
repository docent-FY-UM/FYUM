package com.example.fyum.masterpiece.controller;

import com.example.fyum.masterpiece.dto.CategoryDto;
import com.example.fyum.masterpiece.dto.MasterpieceDto;
import com.example.fyum.masterpiece.dto.MasterpieceListDto;
import com.example.fyum.masterpiece.service.MasterpieceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // 작가 목록
    @GetMapping("/painters")
    public ResponseEntity<Page<CategoryDto>> getPainters(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> painters = masterpieceService.getPainters(page);
        return new ResponseEntity<>(painters, HttpStatus.OK);
    }

    // 작가별 작품 리스트
    @GetMapping("/painters/{painterId}")
    public ResponseEntity<Page<MasterpieceListDto>> getMasterpiecesByPainter(
        @PathVariable int painterId,
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<MasterpieceListDto> result = masterpieceService.getMasterpiecesByPainter(painterId,
            page);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 테마 목록
    @GetMapping("/themes")
    public ResponseEntity<Page<CategoryDto>> getThemes(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> themes = masterpieceService.getThemes(page);

        return new ResponseEntity<>(themes, HttpStatus.OK);
    }

    // 테마별 작품 리스트
    @GetMapping("/themes/{themeId}")
    public ResponseEntity<Page<MasterpieceListDto>> getMasterpiecesByTheme(
        @PathVariable int themeId,
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<MasterpieceListDto> result = masterpieceService.getMasterpiecesByTheme(themeId, page);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 사조 목록
    @GetMapping("/trends")
    public ResponseEntity<Page<CategoryDto>> getTrends(
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<CategoryDto> trends = masterpieceService.getTrends(page);
        return new ResponseEntity<>(trends, HttpStatus.OK);
    }

    // 사조별 작품 리스트
    @GetMapping("/trends/{trendId}")
    public ResponseEntity<Page<MasterpieceListDto>> getMasterpiecesByTrend(
        @PathVariable int trendId,
        @RequestParam(required = false, defaultValue = "1") int page) {
        page--;
        Page<MasterpieceListDto> result = masterpieceService.getMasterpiecesByTrend(trendId, page);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 작품 상세 정보
    @GetMapping("/detail/{paintingId}")
    public ResponseEntity<MasterpieceDto> getMasterpieceDetail(
        @PathVariable int paintingId) {           // 유저 정보 필요 : 찜, 전시회 상태 반환
        MasterpieceDto painting = masterpieceService.getDetail(paintingId);
        return new ResponseEntity<>(painting, HttpStatus.OK);
    }


}
