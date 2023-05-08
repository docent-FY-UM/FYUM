package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Trend;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TrendRepository extends JpaRepository<Trend, Integer> {

    @Query(value = "SELECT t.*, COUNT(m.trend_id) AS cnt "
        + "FROM trend t "
        + "LEFT JOIN masterpiece m "
        + "ON t.id = m.trend_id "
        + "GROUP BY t.id ORDER BY cnt DESC",
        nativeQuery = true)
    Page<Trend> findAllByOrderByMasterpieceDesc(Pageable pageable);

}
