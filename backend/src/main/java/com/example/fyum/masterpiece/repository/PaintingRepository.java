package com.example.fyum.masterpiece.repository;

import com.example.fyum.config.Painting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaintingRepository extends JpaRepository<Painting, Integer> {

    @Query(value = "SELECT a.DType FROM painting a WHERE a.id = :id", nativeQuery = true)
    String selectSQLById(@Param(value = "id") int id);

}
