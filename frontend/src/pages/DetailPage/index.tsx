import { useState, useEffect } from "react";
import {
  getDetailApi,
  fullBookmarkApi,
  emptyBookmarkApi,
  fullFrameApi,
  emptyFrameApi,
} from "../../store/api";
import { useLocation } from "react-router-dom";

import {
  DetailContainer,
  BackgroundImg,
  ContentContainer,
  TitleOrigin,
  TitleKr,
  Content,
  DetailContent,
  ContentDiv,
  DetailDiv,
  AbsoluteDiv,
  SpeakerImg,
  DescriptionBtn,
  DescriptionP,
  MarkContainer,
  EmptyFrameIcStyle,
  FullFrameIcStyle,
  EmptyBookMarkIcStyle,
  FullBookMarkIcStyle,
  FixedContainer,
} from "./styles";

interface detailInfo {
  paintingId: number;
  titleKr: string;
  titleOrigin: string;
  paintedAt: string;
  imgSrc: string;
  painterId: number;
  painterKr: string;
  painterOrigin: string;
  trendId: number;
  trend: string;
  paintingType: string;
  technique: string;
  description: string;
  wishStatus: boolean;
  exhibitionStatus: boolean;
}

const DetailPage = () => {
  const location = useLocation();

  const paintingId = location.pathname.slice(8);

  const [description, setDescription] = useState(true);
  const [frame, setFrame] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  // const [speak, setSpeak] = useState(false);

  // 받아온 데이터 저장
  const [data, setData] = useState<detailInfo>({
    paintingId: 0,
    titleKr: "",
    titleOrigin: "",
    paintedAt: "",
    imgSrc: "",
    painterId: 0,
    painterKr: "",
    painterOrigin: "",
    trendId: 0,
    trend: "",
    paintingType: "",
    technique: "",
    description: "",
    wishStatus: false,
    exhibitionStatus: false,
  });

  const changeState = () => {
    setDescription(!description);
  };

  const changeBookmark = () => {
    setBookmark(!bookmark);
  };

  useEffect(() => {
    // 명화 상세 정보 받아오는 api
    const getDetailData = async () => {
      try {
        const res = await getDetailApi(paintingId);
        // console.log(res)
        setData(res);
        setBookmark(res.wishStatus);
        setFrame(res.exhibitionStatus);
      } catch (error) {
        console.log("데이터 받아오기 실패", error);
      }
    };
    getDetailData();
  }, []);

  // 찜하기 api
  useEffect(() => {
    if (bookmark === true) {
      const fullBookmark = async () => {
        try {
          await fullBookmarkApi(paintingId);
        } catch (error) {
          console.log("찜하기 실패", error);
        }
      };
      fullBookmark();
    } else {
      const emptyBookmark = async () => {
        try {
          await emptyBookmarkApi(paintingId);
        } catch (error) {
          console.log("찜하기 취소 실패", error);
        }
      };
      emptyBookmark();
    }
  }, [bookmark]);

  // 전시회 저장 api
  const changeFrame = () => {
    if (frame === false) {
      const fullFrame = async () => {
        try {
          const res = await fullFrameApi(paintingId);
          // 전시회 목록이 가득찼을 경우
          if (res.data) {
            alert("전시회 목록은 최대 10개까지 가능합니다.");
            return;
          }
          setFrame(true);
        } catch (error) {
          console.log("전시회 저장 실패", error);
        }
      };
      fullFrame();
    } else {
      const emptyFrame = async () => {
        try {
          await emptyFrameApi(paintingId);
          setFrame(false);
        } catch (error) {
          console.log("전시회 저장 취소 실패", error);
        }
      };
      emptyFrame();
    }
  };

  const imgURL = data.imgSrc;

  return (
    <DetailContainer>
      <BackgroundImg
        src={imgURL}
        description={description}
        referrerPolicy="no-referrer"
      />
      {description === true ? (
        <ContentContainer>
          <TitleOrigin len={data.titleOrigin?.length}>
            {data.titleOrigin}
          </TitleOrigin>
          <TitleKr>{data.titleKr}</TitleKr>
          <AbsoluteDiv>
            <DetailDiv>
              <DetailContent>{data.painterOrigin}</DetailContent>
              <DetailContent>{data.paintedAt}</DetailContent>
              <DetailContent>
                {data.paintingType}, {data.technique}
              </DetailContent>
            </DetailDiv>
            <ContentDiv>
              <Content>{data.description}</Content>
            </ContentDiv>
          </AbsoluteDiv>
          {/* <SpeakerImg /> */}
        </ContentContainer>
      ) : null}
      <FixedContainer>
        <DescriptionBtn onClick={changeState}>
          {description === true ? (
            <DescriptionP>Description On.</DescriptionP>
          ) : (
            <DescriptionP>Description Off.</DescriptionP>
          )}
        </DescriptionBtn>
        {description === true ? (
          <MarkContainer>
            {frame === false ? (
              <EmptyFrameIcStyle onClick={changeFrame} />
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}
            {bookmark === false ? (
              <EmptyBookMarkIcStyle onClick={changeBookmark} />
            ) : (
              <FullBookMarkIcStyle onClick={changeBookmark} />
            )}
          </MarkContainer>
        ) : null}
      </FixedContainer>
    </DetailContainer>
  );
};
export default DetailPage;
