package com.example.fyum.exhibition.repository;

import com.example.fyum.exhibition.entity.Exhibition;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.member.entity.Member;
import com.example.fyum.myDrawing.entity.MyDrawing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ExhibitionRepository extends JpaRepository<Exhibition, Integer> {

    Exhibition findByMember(Member member);

    @Query("SELECT count(e.id) > 0 FROM Exhibition e "
            + "WHERE e.member = :member "
            + "AND ((e.painting1 = :mydrawing) OR (e.painting2 = :mydrawing) "
            + "OR (e.painting3 = :mydrawing) OR (e.painting4 = :mydrawing) "
            + "OR (e.painting5 = :mydrawing) OR (e.painting6 = :mydrawing) "
            + "OR (e.painting7 = :mydrawing) OR (e.painting8 = :mydrawing) "
            + "OR (e.painting9 = :mydrawing) OR (e.painting10 = :mydrawing))")
    Boolean existsByMemberIdAndMyDrawingIdx(Member member, MyDrawing mydrawing);



     @Query("SELECT count(e.id) > 0 FROM Exhibition e "
        + "WHERE e.member = :member "
        + "AND ((e.painting1 = :masterpiece) OR (e.painting2 = :masterpiece) "
        + "OR (e.painting3 = :masterpiece) OR (e.painting4 = :masterpiece) "
        + "OR (e.painting5 = :masterpiece) OR (e.painting6 = :masterpiece) "
        + "OR (e.painting7 = :masterpiece) OR (e.painting8 = :masterpiece) "
        + "OR (e.painting9 = :masterpiece) OR (e.painting10 = :masterpiece))")
    Boolean existsByMemberIdAndPaintingIdx(Member member, Masterpiece masterpiece);


}
