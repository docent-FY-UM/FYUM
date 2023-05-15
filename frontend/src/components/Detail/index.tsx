import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

import { PaintingData } from "../../pages/DetailEtcPage";
import {
  fullFrameApi,
  emptyFrameApi,
  deleteMyDrawingApi,
  deleteMyPictureApi,
} from "../../store/api";
import audioDecoder from "../utils/audioDecoder";

import {
  DetailContainer,
  BackgroundImg,
  ContentContainer,
  TitleOrigin,
  AbsoluteDiv,
  DetailContent,
  FixedContainer,
  DescriptionBtn,
  DescriptionP,
  MarkContainer,
  EmptyFrameIcStyle,
  FullFrameIcStyle,
  ArrowBox,
  ArrowStyle,
  SpeakerDiv,
  SpeakerImg,
  MuteIcStyle,
} from "../../pages/DetailPage/styles";
import { DeleteIcStyle } from "./styles";

const Detail = ({
  data,
  frame,
  setFrame,
  curation,
}: {
  data: PaintingData;
  frame: boolean;
  setFrame: any;
  curation: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [description, setDescription] = useState(true);
  const [isArrowBoxVisible, setArrowBoxVisible] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const pathName = location.pathname;
  const pathParts = pathName.split("/");
  const locate = pathParts[2];

  const changeState = () => {
    setDescription(!description);
  };

  // 전시회 저장 api
  const changeFrame = () => {
    if (frame === false) {
      const fullFrame = async () => {
        try {
          const res = await fullFrameApi(data.paintingId.toString());
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
          await emptyFrameApi(data.paintingId.toString());
          setFrame(false);
        } catch (error) {
          console.log("전시회 저장 취소 실패", error);
        }
      };
      emptyFrame();
    }
  };

  // 삭제
  const onDelete = () => {
    if (locate === "painting") {
      const deleteRequest = async () => {
        try {
          await deleteMyDrawingApi(data.paintingId.toString());
          alert("삭제되었습니다!");
          navigate(-1);
        } catch (error) {
          console.log("삭제 실패", error);
        }
      };
      deleteRequest();
    } else if (locate === "picture") {
      const deleteRequest = async () => {
        try {
          await deleteMyPictureApi(data.paintingId.toString());
          alert("삭제되었습니다!");
          navigate(-1);
        } catch (error) {
          console.log("삭제 실패", error);
        }
      };
      deleteRequest();
    }
  };

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

  useEffect(() => {
    // 다른 페이지로 이동시 audio 멈추기
    return () => {
      window.location.reload()
    };
  }, []);

  console.log("데이터 잘넘어옴?", data);

  return (
    <DetailContainer>
      {data.imgSrc && (
        <BackgroundImg
          src={data.imgSrc}
          description={description}
          referrerPolicy="no-referrer"
        />
      )}
      {description && (
        <ContentContainer>
          <TitleOrigin len={data.title?.length}>{data.title}</TitleOrigin>
          <AbsoluteDiv className="etc">
            <DetailContent className="etc">{data.discription}</DetailContent>
            <SpeakerDiv>
              {isPlay === false ? (
                <SpeakerImg onClick={onClickPlay} />
              ) : (
                <MuteIcStyle onClick={onClickStop} />
              )}
            </SpeakerDiv>
          </AbsoluteDiv>
        </ContentContainer>
      )}
      <FixedContainer>
        <DescriptionBtn onClick={changeState}>
          {description === true ? (
            <DescriptionP>Description On.</DescriptionP>
          ) : (
            <DescriptionP>Description Off.</DescriptionP>
          )}
        </DescriptionBtn>
        {description && (
          <MarkContainer className="etc">
            {frame === false ? (
              <>
                <EmptyFrameIcStyle
                  onClick={changeFrame}
                  onMouseEnter={() => setArrowBoxVisible(true)}
                  onMouseLeave={() => setArrowBoxVisible(false)}
                  locate={locate}
                />
                {isArrowBoxVisible && (
                  <ArrowBox>
                    <span>전시회 리스트에 저장하기</span>
                    <ArrowStyle />
                  </ArrowBox>
                )}
              </>
            ) : (
              <FullFrameIcStyle onClick={changeFrame} locate={locate} />
            )}
            <DeleteIcStyle onClick={onDelete} />
          </MarkContainer>
        )}
      </FixedContainer>
    </DetailContainer>
  );
};

export default Detail;
