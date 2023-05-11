package com.example.fyum.wishlist.service;


import com.example.fyum.config.Painting;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.repository.MasterpieceRepository;
import com.example.fyum.masterpiece.repository.PaintingRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.wishlist.dto.WishlistResponseDto;
import com.example.fyum.wishlist.entity.Wishlist;
import com.example.fyum.wishlist.repository.WishlistRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WishlistService {

    private final MemberRepository memberRepository;

    private final MasterpieceRepository masterpieceRepository;

    private final WishlistRepository wishlistRepository;
    private final PaintingRepository paintingRepository;

    public void postWishlist(int paintingId, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);

        Optional<Masterpiece> masterpiece = masterpieceRepository.findById(paintingId);

        Wishlist wishlist = Wishlist.builder()
                            .member(member)
                            .masterpiece(masterpiece.get())
                            .build();
        wishlistRepository.save(wishlist);
    }

    public void deleteWishlist(int paintingId, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);
        Optional<Masterpiece> masterpieceOptional = masterpieceRepository.findById(paintingId);
        Masterpiece masterpiece = masterpieceOptional.get();


        wishlistRepository.deleteByMemberAndMasterpiece(member,masterpiece);

    }

    public List<WishlistResponseDto> getWishList (String kakaoId){

        List<WishlistResponseDto> res = new ArrayList<>();

        Member member = memberRepository.findByKakaoId(kakaoId);

        List<Wishlist> temp = wishlistRepository.findByMember(member);

        for(int i = 0; i < temp.size(); i++){
            WishlistResponseDto dto = new WishlistResponseDto();
            Masterpiece Ent = temp.get(i).getMasterpiece();
            dto.setPaintingId(Ent.getId());
            if(Ent.getTitleOrigin() == null){
                dto.setTitle(Ent.getTitleKr());
            }else {
                dto.setTitle(Ent.getTitleOrigin());
            }
            dto.setImgSrc(Ent.getImgSrc());

            res.add(dto);
        }

        return res;

    }



}
