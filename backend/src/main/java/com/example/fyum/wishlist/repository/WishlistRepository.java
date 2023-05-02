package com.example.fyum.wishlist.repository;

import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.member.entity.Member;
import com.example.fyum.wishlist.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {


    List<Wishlist> findByMember(Member member);
    Boolean existsByMemberAndMasterpiece(Member member, Masterpiece masterpiece);
    @Transactional
    void deleteByMemberAndMasterpiece(Member member, Masterpiece masterpiece);
}
