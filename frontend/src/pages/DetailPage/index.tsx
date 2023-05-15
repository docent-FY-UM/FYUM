import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getDetailApi,
  fullBookmarkApi,
  emptyBookmarkApi,
  fullFrameApi,
  emptyFrameApi,
  addLikedApi,
  getCurationApi,
} from "../../store/api";
import audioDecoder from "../../components/utils/audioDecoder";

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
  SpeakerDiv,
  SpeakerImg,
  MuteIcStyle,
  DescriptionBtn,
  DescriptionP,
  MarkContainer,
  EmptyFrameIcStyle,
  FullFrameIcStyle,
  EmptyHeartIcStyle,
  FullHeartIcStyle,
  FixedContainer,
  ArrowBox,
  ArrowStyle,
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

  const [curation, setCuration] = useState<string>("");
  const [isPlay, setIsPlay] = useState(false);

  const [isArrowBoxVisible, setArrowBoxVisible] = useState(false);

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

    // 큐레이션 음성 받아오기
    const getCuration = async () => {
      try {
        const res = await getCurationApi(paintingId);
        setCuration(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCuration();

    // 음성 변환
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
      const addLikedList = async () => {
        try {
          await addLikedApi();
        } catch (err) {
          console.log("찜하기 반영 실패", err);
        }
      };
      fullBookmark();
      addLikedList();
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

  // 이미지
  const imgURL = data.imgSrc;

  // 큐레이션 재생
  const onClickPlay = () => {
    setIsPlay(true);
  };

  // 큐레이션 중지
  const onClickStop = () => {
    setIsPlay(false);
    audio.pause();
  };

  useEffect(() => {
    if (isPlay) {
      playAudio();
    }
  }, [isPlay]);

  // 오디오 객체 생성
  const audio = new Audio();

  const playAudio = () => {
    const decodedAudioData = audioDecoder(curation);
    const blob = new Blob([decodedAudioData], { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);
    audio.src = url;

    // 오디오 재생
    audio.play();
  };

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
            <SpeakerDiv>
              {isPlay === false ? (
                <SpeakerImg onClick={onClickPlay} />
              ) : (
                <MuteIcStyle onClick={onClickStop} />
              )}
            </SpeakerDiv>
          </AbsoluteDiv>
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
              <>
                <EmptyFrameIcStyle
                  onClick={changeFrame}
                  onMouseEnter={() => setArrowBoxVisible(true)}
                  onMouseLeave={() => setArrowBoxVisible(false)}
                />
                {isArrowBoxVisible && (
                  <ArrowBox>
                    <span>전시회 리스트에 저장하기</span>
                    <ArrowStyle />
                  </ArrowBox>
                )}
              </>
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}

            {bookmark === false ? (
              <EmptyHeartIcStyle onClick={changeBookmark} />
            ) : (
              <FullHeartIcStyle onClick={changeBookmark} />
            )}
          </MarkContainer>
        ) : null}
      </FixedContainer>
    </DetailContainer>
  );
};
export default DetailPage;
