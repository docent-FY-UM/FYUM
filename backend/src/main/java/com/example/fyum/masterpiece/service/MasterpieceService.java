package com.example.fyum.masterpiece.service;

import com.example.fyum.exhibition.repository.ExhibitionRepository;
import com.example.fyum.masterpiece.dto.CategoryDto;
import com.example.fyum.masterpiece.dto.MasterpieceDto;
import com.example.fyum.masterpiece.dto.MasterpieceListDto;
import com.example.fyum.masterpiece.dto.PainterListDto;
import com.example.fyum.masterpiece.dto.TrendListDto;
import com.example.fyum.masterpiece.entity.Masterpiece;
import com.example.fyum.masterpiece.entity.Painter;
import com.example.fyum.masterpiece.entity.Theme;
import com.example.fyum.masterpiece.entity.Trend;
import com.example.fyum.masterpiece.repository.MasterpieceRepository;
import com.example.fyum.masterpiece.repository.PainterRepository;
import com.example.fyum.masterpiece.repository.PaintingRepository;
import com.example.fyum.masterpiece.repository.ThemeRepository;
import com.example.fyum.masterpiece.repository.TrendRepository;
import com.example.fyum.member.entity.Member;
import com.example.fyum.member.repository.MemberRepository;
import com.example.fyum.myDrawing.entity.MyDrawing;
import com.example.fyum.myDrawing.entity.MyPicture;
import com.example.fyum.myDrawing.repository.MyDrawingRepository;
import com.example.fyum.myDrawing.repository.MyPictureRepository;
import com.example.fyum.wishlist.repository.WishlistRepository;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MasterpieceService {

    private final MasterpieceRepository masterpieceRepository;
    private final PaintingRepository paintingRepository;
    private final MyDrawingRepository myDrawingRepository;
    private final MyPictureRepository myPictureRepository;
    private final PainterRepository painterRepository;
    private final ThemeRepository themeRepository;
    private final TrendRepository trendRepository;
    private final MemberRepository memberRepository;
    private final WishlistRepository wishlistRepository;
    private final ExhibitionRepository exhibitionRepository;
    @Value("${clova.client_id}")
    private String clovaClientId;
    @Value("${clova.client_secret}")
    private String clovaClientSecret;


    public Page<CategoryDto> getPainters(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Painter> painters = painterRepository.findAllByImgSrcIsNotNull(pageable);

        return painters.map(CategoryDto::new);
    }

    public PainterListDto getMasterpiecesByPainter(int painterId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Painter painter = painterRepository.findById(painterId)
            .orElseThrow(NullPointerException::new);
        Page<MasterpieceListDto> masterpieceLists = masterpieceRepository.findAllByPainter(pageable,
            painter).map(MasterpieceListDto::new);

        return new PainterListDto(masterpieceLists, painter);
    }

    public Page<CategoryDto> getThemes(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Theme> themes = themeRepository.findAll(pageable);

        return themes.map(CategoryDto::new);
    }

    public Page<CategoryDto> getTrends(int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Trend> trends = trendRepository.findAllByOrderByMasterpieceDesc(pageable);

        return trends.map(CategoryDto::new);
    }

    public MasterpieceDto getDetail(String kakaoId, int paintingId) {
        Member member = memberRepository.findByKakaoId(kakaoId);
        Masterpiece masterpiece = masterpieceRepository.findById(paintingId)
            .orElseThrow(NullPointerException::new);
        Boolean wishStatus = wishlistRepository.existsByMemberAndMasterpiece(member, masterpiece);
        Boolean exhibitStatus = exhibitionRepository.existsByMemberIdAndPaintingIdx(member,
            masterpiece);

        return new MasterpieceDto(masterpiece, wishStatus, exhibitStatus);
    }

    public Page<MasterpieceListDto> getMasterpiecesByTheme(int themeId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Theme theme = themeRepository.findById(themeId).orElseThrow(NullPointerException::new);
        Page<Masterpiece> masterpieces = masterpieceRepository.findAllByTheme(pageable, theme);

        return masterpieces.map(MasterpieceListDto::new);
    }

    public TrendListDto getMasterpiecesByTrend(int trendId, int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Trend trend = trendRepository.findById(trendId).orElseThrow(NullPointerException::new);
        Page<MasterpieceListDto> masterpieces = masterpieceRepository.findAllByTrend(pageable,
            trend).map(MasterpieceListDto::new);

        return new TrendListDto(masterpieces, trend);
    }

    public String getCuration(int paintingId) {
        String dtype = paintingRepository.selectSQLById(paintingId);
        String description = null;
        if (dtype.equals("MP")) {
            Masterpiece masterpiece = masterpieceRepository.findById(paintingId)
                .orElseThrow(NullPointerException::new);
            description = getShortDescription(masterpiece.getDescription());
        } else if (dtype.equals("MD")) {
            MyDrawing myDrawing = myDrawingRepository.findById(paintingId)
                .orElseThrow(NullPointerException::new);
            description = getShortDescription(myDrawing.getCuration());
        } else {
            MyPicture myPicture = myPictureRepository.findById(paintingId)
                .orElseThrow(NullPointerException::new);
            description = getShortDescription(myPicture.getCuration());
        }

        if (description == null) {
            return null;
        }

        try {
            String apiURL = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";
            String encodedText = URLEncoder.encode(description, "UTF-8");
            String params = "speaker=nara&text=" + encodedText;

            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clovaClientId);
            con.setRequestProperty("X-NCP-APIGW-API-KEY", clovaClientSecret);
            con.setDoOutput(true);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(params);
            wr.flush();
            wr.close();

            if (con.getResponseCode() == 200) {
                InputStream is = con.getInputStream();
                ByteArrayOutputStream bOutStream = new ByteArrayOutputStream();
                byte[] bytes = new byte[1024];
                int readBytes;
                while ((readBytes = is.read(bytes)) != -1) {
                    bOutStream.write(bytes, 0, readBytes);
                }
                byte[] bytesArr = bOutStream.toByteArray();
                bOutStream.close();
                is.close();

                return Base64.getEncoder().encodeToString(bytesArr);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    private String getShortDescription(String description) {
        if (description == null) {
            return null;
        }

        String[] desc = description.split("[.]", 6);

        if (desc.length < 5) {
            return description;
        }

        StringBuilder shortDesc = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            shortDesc.append(desc[i]).append(".");
        }

        return shortDesc.toString();
    }
}