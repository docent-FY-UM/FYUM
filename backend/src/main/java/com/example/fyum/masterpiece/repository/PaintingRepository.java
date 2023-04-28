package com.example.fyum.masterpiece.repository;

import com.example.fyum.config.Painting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaintingRepository extends JpaRepository<Painting, Integer> {

}
