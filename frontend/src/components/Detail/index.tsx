import { useState } from "react";

import { PaintingData } from "../../pages/DetailEtcPage";
import { fullFrameApi, emptyFrameApi } from "../../store/api";
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
} from "../../pages/DetailPage/styles";

const Detail = ({
  data,
  frame,
  setFrame,
}: {
  data: PaintingData;
  frame: boolean;
  setFrame: any;
}) => {
  const [description, setDescription] = useState(true);

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

  console.log("데이터 잘넘어옴?", data);
  console.log("배경이미지?", data.imgSrc);

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
          <MarkContainer>
            {frame === false ? (
              <EmptyFrameIcStyle onClick={changeFrame} />
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}
          </MarkContainer>
        )}
      </FixedContainer>
    </DetailContainer>
  );
};

export default Detail;
