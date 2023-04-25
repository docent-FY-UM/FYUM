package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Theme;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Integer> {

    Page<Theme> findAll(Pageable pageable);


}
