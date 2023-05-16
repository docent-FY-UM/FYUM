package com.example.fyum.exhibition.service;

import com.example.fyum.config.Painting;
import com.example.fyum.exhibition.dto.ExhibitionResponseDto;
import com.example.fyum.exhibition.entity.Exhibition;
import com.example.fyum.exhibition.repository.ExhibitionRepository;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.repository.MasterpieceRepository;
import com.example.fyum.masterpiece.repository.PaintingRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.myDrawing.entity.MyDrawing;
import com.example.fyum.myDrawing.entity.MyPicture;
import com.example.fyum.myDrawing.repository.MyDrawingRepository;
import com.example.fyum.myDrawing.repository.MyPictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExhibitionService {

    private final ExhibitionRepository exhibitionRepository;

    private final MemberRepository memberRepository;

    private final PaintingRepository paintingRepository;

    private final MasterpieceRepository masterpieceRepository;

    private final MyDrawingRepository myDrawingRepository;

    private final MyPictureRepository myPictureRepository;

    public Painting getEx(int paintingId) {

        String temp = paintingRepository.selectSQLById(paintingId);

        if (temp.equals("MP")) {
            Optional<Masterpiece> ex = masterpieceRepository.findById(paintingId);
            return ex.get();
        } else if (temp.equals("MD")) {
            Optional<MyDrawing> ex = myDrawingRepository.findById(paintingId);
            return ex.get();
        } else {
            Optional<MyPicture> ex = myPictureRepository.findById(paintingId);
            return ex.get();
        }

    }

    public int postExhibition(String kakaoId, int paintingId) {
        Member member = memberRepository.findByKakaoId(kakaoId);

        Exhibition exhibition = exhibitionRepository.findByMember(member);

        int flag = 0;
        if (exhibition.getPainting1() == null) {
            exhibition.setPainting1(getEx(paintingId));
        } else if (exhibition.getPainting2() == null) {
            exhibition.setPainting2(getEx(paintingId));
        } else if (exhibition.getPainting3() == null) {
            exhibition.setPainting3(getEx(paintingId));
        } else if (exhibition.getPainting4() == null) {
            exhibition.setPainting4(getEx(paintingId));
        } else if (exhibition.getPainting5() == null) {
            exhibition.setPainting5(getEx(paintingId));
        } else if (exhibition.getPainting6() == null) {
            exhibition.setPainting6(getEx(paintingId));
        } else if (exhibition.getPainting7() == null) {
            exhibition.setPainting7(getEx(paintingId));
        } else if (exhibition.getPainting8() == null) {
            exhibition.setPainting8(getEx(paintingId));
        } else if (exhibition.getPainting9() == null) {
            exhibition.setPainting9(getEx(paintingId));
        } else if (exhibition.getPainting10() == null) {
            exhibition.setPainting10(getEx(paintingId));
        } else {
            flag = 1;
        }

        if (flag == 0) {
            exhibitionRepository.save(exhibition);
        }
        return flag;

    }

    public ExhibitionResponseDto exToDto(Painting painting) {
        ExhibitionResponseDto dto = new ExhibitionResponseDto();

        if (painting == null) {
            dto.setPaintingId(-1);
            return dto;
        } else {
            String Dtype = paintingRepository.selectSQLById(painting.getId());
            dto.setDType(Dtype);
            dto.setImgSrc(painting.getImgSrc());
            dto.setPaintingId(painting.getId());
            if (Dtype.equals("MP")) {
                if (masterpieceRepository.findById(painting.getId()).get().getTitleOrigin()
                    != null) {
                    dto.setTitle(
                        masterpieceRepository.findById(painting.getId()).get().getTitleOrigin());
                } else {
                    dto.setTitle(
                        masterpieceRepository.findById(painting.getId()).get().getTitleKr());
                }
            } else if (Dtype.equals("MD")) {
                dto.setTitle(myDrawingRepository.findById(painting.getId()).get().getTitle());
            } else {
                dto.setTitle(myPictureRepository.findById(painting.getId()).get().getTitle());
            }
            return dto;
        }


    }

    public List<ExhibitionResponseDto> getExhi(String kakaoId) {

        Member member = memberRepository.findByKakaoId(kakaoId);
        Exhibition exhibition = exhibitionRepository.findByMember(member);
        List<ExhibitionResponseDto> res = new ArrayList<>();

        if (exToDto(exhibition.getPainting1()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting1()));
        }
        if (exToDto(exhibition.getPainting2()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting2()));
        }
        if (exToDto(exhibition.getPainting3()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting3()));
        }
        if (exToDto(exhibition.getPainting4()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting4()));
        }
        if (exToDto(exhibition.getPainting5()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting5()));
        }
        if (exToDto(exhibition.getPainting6()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting6()));
        }
        if (exToDto(exhibition.getPainting7()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting7()));
        }
        if (exToDto(exhibition.getPainting8()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting8()));
        }
        if (exToDto(exhibition.getPainting9()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting9()));
        }
        if (exToDto(exhibition.getPainting10()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting10()));
        }

        return res;

    }

    public List<ExhibitionResponseDto> getOtherExhi(String roomCode) {

        Optional<Member> member = memberRepository.findByRoomCode(roomCode);
        Exhibition exhibition = exhibitionRepository.findByMember(member.get());
        List<ExhibitionResponseDto> res = new ArrayList<>();

        if (exToDto(exhibition.getPainting1()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting1()));
        }
        if (exToDto(exhibition.getPainting2()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting2()));
        }
        if (exToDto(exhibition.getPainting3()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting3()));
        }
        if (exToDto(exhibition.getPainting4()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting4()));
        }
        if (exToDto(exhibition.getPainting5()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting5()));
        }
        if (exToDto(exhibition.getPainting6()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting6()));
        }
        if (exToDto(exhibition.getPainting7()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting7()));
        }
        if (exToDto(exhibition.getPainting8()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting8()));
        }
        if (exToDto(exhibition.getPainting9()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting9()));
        }
        if (exToDto(exhibition.getPainting10()).getPaintingId() != -1) {
            res.add(exToDto(exhibition.getPainting10()));
        }

        return res;

    }


    public int outExhi(int paintingId, String kakaoId) {

        Member member = memberRepository.findByKakaoId(kakaoId);
        Exhibition exhibition = exhibitionRepository.findByMember(member);

        int flag = 0;
        if (exhibition.getPainting1() != null && exhibition.getPainting1().getId() == paintingId) {
            exhibition.setPainting1(null);
        } else if (exhibition.getPainting2() != null
            && exhibition.getPainting2().getId() == paintingId) {
            exhibition.setPainting2(null);
        } else if (exhibition.getPainting3() != null
            && exhibition.getPainting3().getId() == paintingId) {
            exhibition.setPainting3(null);
        } else if (exhibition.getPainting4() != null
            && exhibition.getPainting4().getId() == paintingId) {
            exhibition.setPainting4(null);
        } else if (exhibition.getPainting5() != null
            && exhibition.getPainting5().getId() == paintingId) {
            exhibition.setPainting5(null);
        } else if (exhibition.getPainting6() != null
            && exhibition.getPainting6().getId() == paintingId) {
            exhibition.setPainting6(null);
        } else if (exhibition.getPainting7() != null
            && exhibition.getPainting7().getId() == paintingId) {
            exhibition.setPainting7(null);
        } else if (exhibition.getPainting8() != null
            && exhibition.getPainting8().getId() == paintingId) {
            exhibition.setPainting8(null);
        } else if (exhibition.getPainting9() != null
            && exhibition.getPainting9().getId() == paintingId) {
            exhibition.setPainting9(null);
        } else if (exhibition.getPainting10() != null
            && exhibition.getPainting10().getId() == paintingId) {
            exhibition.setPainting10(null);
        } else {
            flag = 1;
        }

        if (flag == 0) {
            exhibitionRepository.save(exhibition);
        }
        return flag;

    }



    public int postExhibitionTen(String kakaoId, int paintingId){
        Member member = memberRepository.findByKakaoId(kakaoId);

        Exhibition exhibition = exhibitionRepository.findByMember(member);
        int flag = 0;
        exhibition.setPainting10(getEx(paintingId));
        exhibitionRepository.save(exhibition);
        return flag;

    }
}
