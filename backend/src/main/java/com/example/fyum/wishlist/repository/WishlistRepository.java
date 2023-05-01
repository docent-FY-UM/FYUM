package com.example.fyum.wishlist.repository;

import com.example.fyum.config.Painting;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.repository.PaintingRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.wishlist.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {


    List<Wishlist> findByMember(Member member);
    @Transactional
    void deleteByMemberAndMasterpiece(Member member, Masterpiece masterpiece);
}
