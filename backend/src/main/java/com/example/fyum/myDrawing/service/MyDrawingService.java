package com.example.fyum.myDrawing.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.fyum.config.AwsS3Config;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.myDrawing.dto.MyDrawingRequestDto;
import com.example.fyum.myDrawing.dto.MyDrawingResponseDto;
import com.example.fyum.myDrawing.entity.MyDrawing;
import com.example.fyum.myDrawing.repository.MyDrawingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.util.Base64;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MyDrawingService {

    private final MyDrawingRepository myDrawingRepository;

    private final MemberRepository memberRepository;

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public MyDrawingResponseDto saveMyDrawing(MyDrawingRequestDto dto, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);


        MyDrawing myDrawing = MyDrawing.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .member(member)
                .build();


        // base64 문자열로부터 이미지 데이터 디코딩
        byte[] imageBytes = Base64.getDecoder().decode(dto.getBase64());

        // S3 객체 메타 데이터 설정
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType("image/png"); // 이미지 타입 설정


        String filename = UUID.randomUUID().toString()+".png";
        // S3 객체 업로드 요청 생성
        PutObjectRequest request = new PutObjectRequest(bucket, filename, new ByteArrayInputStream(imageBytes), metadata);

        // S3 객체 업로드 요청 전송
        amazonS3.putObject(request.withCannedAcl(CannedAccessControlList.PublicRead));

        myDrawing.setImgSrc("https://testjae2.s3.ap-northeast-2.amazonaws.com/"+filename);
        int pId = myDrawingRepository.save(myDrawing).getId();

        MyDrawingResponseDto resdto = new MyDrawingResponseDto();
        resdto.setPaintingId(pId);
        resdto.setImgSrc("https://testjae2.s3.ap-northeast-2.amazonaws.com/"+filename);

        return resdto;

    }

}
