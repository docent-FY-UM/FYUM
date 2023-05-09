package com.example.fyum.myDrawing.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.fyum.exhibition.repository.ExhibitionRepository;
import com.example.fyum.exhibition.service.ExhibitionService;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.myDrawing.dto.MyDrawingDetailDto;
import com.example.fyum.myDrawing.dto.MyDrawingRequestDto;
import com.example.fyum.myDrawing.dto.MyDrawingResponseDto;
import com.example.fyum.myDrawing.entity.MyDrawing;
import com.example.fyum.myDrawing.entity.MyPicture;
import com.example.fyum.myDrawing.repository.MyDrawingRepository;
import com.example.fyum.myDrawing.repository.MyPictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.util.*;

@Service
@RequiredArgsConstructor
public class MyPictureService {
    private final MyDrawingRepository myDrawingRepository;

    private final MyPictureRepository myPictureRepository;

    private final MemberRepository memberRepository;

    private final ExhibitionRepository exhibitionRepository;

    private final ExhibitionService exhibitionService;

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${perfixS3}")
    private String perfix;

    public MyDrawingResponseDto saveMyPicture(MyDrawingRequestDto dto, String kakaoId){

        Member member = memberRepository.findByKakaoId(kakaoId);


        MyPicture myPicture = MyPicture.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .member(member)
                .build();


        // base64 문자열로부터 이미지 데이터 디코딩
        byte[] imageBytes = Base64.getDecoder().decode(dto.getImg());

        // S3 객체 메타 데이터 설정
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType("image/png"); // 이미지 타입 설정


        String filename = UUID.randomUUID().toString()+".png";
        // S3 객체 업로드 요청 생성
        PutObjectRequest request = new PutObjectRequest(bucket, filename, new ByteArrayInputStream(imageBytes), metadata);

        // S3 객체 업로드 요청 전송
        amazonS3.putObject(request.withCannedAcl(CannedAccessControlList.PublicRead));


        myPicture.setImgSrc(perfix+filename);
        int pId = myPictureRepository.save(myPicture).getId();

        MyDrawingResponseDto resdto = new MyDrawingResponseDto();
        resdto.setPaintingId(pId);
        resdto.setImgSrc(perfix+filename);


        //사진은 저장하자마자 전시회 등록
        exhibitionService.postExhibition(kakaoId,pId);

        return resdto;

    }

    public List<MyDrawingResponseDto> getMyPicture(String kakaoId){
        Member member = memberRepository.findByKakaoId(kakaoId);

        List<MyPicture> temp = myPictureRepository.findByMember(member);

        List<MyDrawingResponseDto> res = new ArrayList<>();
        for(int i = 0; i< temp.size(); i++){
            MyPicture md = temp.get(i);
            MyDrawingResponseDto dto = new MyDrawingResponseDto();
            dto.setImgSrc(md.getImgSrc());
            dto.setPaintingId(md.getId());
            dto.setTitle(md.getTitle());
            res.add(dto);
        }
        return res;
    }

    public MyDrawingDetailDto getDetail(int paintingId, String kakaoId){

        Member member =memberRepository.findByKakaoId(kakaoId);

        MyPicture temp =myPictureRepository.findByMemberAndId(member,paintingId);

        MyDrawingDetailDto res = new MyDrawingDetailDto();
        res.setImgSrc(temp.getImgSrc());
        res.setPaintingId(temp.getId());
        res.setTitle(temp.getTitle());
        res.setDiscription(temp.getDescription());
        res.setCuration(temp.getCuration());
        res.setExhibitionStatus(exhibitionRepository.existsByMemberIdAndMyPictureIdx(member,temp));


        return res;

    }

    public void deleteMyPicture(int paintingId, String kakaoId){
        Member member =memberRepository.findByKakaoId(kakaoId);

        //전시회에서 내리기
        exhibitionService.outExhi(paintingId, kakaoId);
        //목록에서 지우기
        Optional<MyPicture> temp = myPictureRepository.findById(paintingId);
        String fileNameArr = temp.get().getImgSrc();
        String [] arr = fileNameArr.split("/");
        String fileName = arr[3];


        myPictureRepository.deleteById(paintingId);
        //이미지도 삭제


        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));


    }
}
