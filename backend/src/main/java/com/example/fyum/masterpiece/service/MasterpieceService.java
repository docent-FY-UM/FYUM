package com.example.fyum.masterpiece.service;

import com.example.fyum.masterpiece.dto.CategoryDto;
import com.example.fyum.masterpiece.dto.MasterpieceDto;
import com.example.fyum.masterpiece.dto.MasterpieceListDto;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.entity.Painter;
import com.example.fyum.masterpiece.entity.Theme;
import com.example.fyum.masterpiece.entity.Trend;
import com.example.fyum.masterpiece.repository.MasterpieceRepository;
import com.example.fyum.masterpiece.repository.PainterRepository;
import com.example.fyum.masterpiece.repository.ThemeRepository;
import com.example.fyum.masterpiece.repository.TrendRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MasterpieceService {

    private final MasterpieceRepository masterpieceRepository;
    private final PainterRepository painterRepository;
    private final ThemeRepository themeRepository;
    private final TrendRepository trendRepository;


    public Page<CategoryDto> getPainters(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Painter> painters = painterRepository.findAll(pageable);
        return painters.map(CategoryDto::new);
    }

    public Page<MasterpieceListDto> getMasterpiecesByPainter(int painterId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Optional<Painter> optionalPainter = painterRepository.findById(painterId);
        if (optionalPainter.isEmpty()) {
            return null;
        }
        Painter painter = optionalPainter.get();
        Page<Masterpiece> result = masterpieceRepository.findAllByPainter(pageable, painter);
        return result.map(MasterpieceListDto::new);
    }

    public Page<CategoryDto> getThemes(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Theme> themes = themeRepository.findAll(pageable);
        return themes.map(CategoryDto::new);
    }

    public Page<CategoryDto> getTrends(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Trend> trends = trendRepository.findAll(pageable);
        return trends.map(CategoryDto::new);
    }

    public MasterpieceDto getDetail(int paintingId) {
        Optional<Masterpiece> masterpiece = masterpieceRepository.findById(paintingId);
        return masterpiece.map(MasterpieceDto::new).orElse(null);
    }

    public Page<MasterpieceListDto> getMasterpiecesByTheme(int themeId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Optional<Theme> themeOptional = themeRepository.findById(themeId);
        if (themeOptional.isEmpty()) {
            return null;
        }
        Theme theme = themeOptional.get();
        Page<Masterpiece> masterpieces = masterpieceRepository.findAllByTheme(pageable, theme);
        return masterpieces.map(MasterpieceListDto::new);
    }

    public Page<MasterpieceListDto> getMasterpiecesByTrend(int trendId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Optional<Trend> trendOptional = trendRepository.findById(trendId);
        if (trendOptional.isEmpty()) {
            return null;
        }
        Trend trend = trendOptional.get();
        Page<Masterpiece> masterpieces = masterpieceRepository.findAllByTrend(pageable, trend);
        return masterpieces.map(MasterpieceListDto::new);
    }
}
