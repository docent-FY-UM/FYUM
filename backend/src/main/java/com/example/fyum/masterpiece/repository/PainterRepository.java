package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Painter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PainterRepository extends JpaRepository<Painter, Integer> {

    @Query(value = "SELECT p.*, COUNT(m.painter_id) AS cnt "
        + "FROM painter p "
        + "LEFT JOIN masterpiece m "
        + "ON p.id = m.painter_id "
        + "WHERE p.img_src IS NOT NULL "
        + "GROUP BY p.id ORDER BY cnt DESC",
        nativeQuery = true)
    Page<Painter> findAllByImgSrcIsNotNull(Pageable pageable);

}
