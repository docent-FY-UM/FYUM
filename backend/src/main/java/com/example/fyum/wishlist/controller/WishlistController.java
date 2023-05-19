package com.example.fyum.wishlist.controller;

import com.example.fyum.wishlist.dto.WishlistResponseDto;
import com.example.fyum.wishlist.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    @PostMapping("/{paintingId}")
    public ResponseEntity postWishList(@PathVariable int paintingId,
        Authentication authentication) {
        wishlistService.postWishlist(paintingId, authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{paintingId}")
    public ResponseEntity deleteWishList(@PathVariable int paintingId,
        Authentication authentication) {
        wishlistService.deleteWishlist(paintingId, authentication.getName());
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<WishlistResponseDto>> getWishList(Authentication authentication) {
        return ResponseEntity.ok(wishlistService.getWishList(authentication.getName()));
    }


}
