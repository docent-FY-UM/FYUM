package com.example.fyum.masterpiece.service;

import com.example.fyum.masterpiece.dto.CategoryDto;
import com.example.fyum.masterpiece.entity.Painter;
import com.example.fyum.masterpiece.entity.Theme;
import com.example.fyum.masterpiece.entity.Trend;
import com.example.fyum.masterpiece.repository.PainterRepository;
import com.example.fyum.masterpiece.repository.ThemeRepository;
import com.example.fyum.masterpiece.repository.TrendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MasterpieceService {

    private final PainterRepository painterRepository;
    private final ThemeRepository themeRepository;
    private final TrendRepository trendRepository;


    public Page<CategoryDto> getPainters(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Painter> painters = painterRepository.findAll(pageable);
        return painters.map(CategoryDto::new);
    }

    public void getMasterpiecesByPainter(int painterId, int page) {
        Painter painter = painterRepository.findById(painterId).orElseGet(null);

    }

    public Page<CategoryDto> getThemes(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Theme> themes = themeRepository.findAll(pageable);
        return themes.map(CategoryDto::new);
    }

    public Page<CategoryDto> getTrends(int page) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Trend> trends = trendRepository.findAll(pageable);
        return trends.map(CategoryDto::new);
    }
}
