package com.example.fyum.masterpiece.repository;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.entity.Painter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MasterpieceRepository extends JpaRepository<Masterpiece, Integer> {

    Page<Masterpiece> findAllByPainter(Painter painter, Pageable pageable);
}
