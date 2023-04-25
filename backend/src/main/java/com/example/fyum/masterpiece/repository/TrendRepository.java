package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Trend;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrendRepository extends JpaRepository<Trend, Integer> {

    Page<Trend> findAll(Pageable pageable);

}
