import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import { PaintingData } from "../../pages/DetailEtcPage";
import {
  fullFrameApi,
  emptyFrameApi,
  deleteMyDrawingApi,
  deleteMyPictureApi,
} from "../../store/api";
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
import { DeleteIcStyle } from "./styles";

const Detail = ({
  data,
  frame,
  setFrame,
}: {
  data: PaintingData;
  frame: boolean;
  setFrame: any;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
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

  // 삭제
  const onDelete = () => {
    const pathName = location.pathname;
    const pathParts = pathName.split("/");
    const locate = pathParts[2];

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
              <EmptyFrameIcStyle onClick={changeFrame} />
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}
            <DeleteIcStyle onClick={onDelete} />
          </MarkContainer>
        )}
      </FixedContainer>
    </DetailContainer>
  );
};

export default Detail;
