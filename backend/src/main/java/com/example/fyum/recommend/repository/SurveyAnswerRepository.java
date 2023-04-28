package com.example.fyum.recommend.repository;

import com.example.fyum.recommend.entity.SurveyAnswer;
import com.example.fyum.wishlist.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SurveyAnswerRepository extends JpaRepository<SurveyAnswer, Integer>{

}
