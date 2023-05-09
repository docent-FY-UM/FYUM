import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { exhibitionListActions } from "../../store/exhibitionListSlice";
import { useHorizontalScroll } from "../utils/useSideScroll";
import Btn from "../common/Btn";
import Form from "../common/form";
import useModal from "../utils/useModal";

import {
  ImageContainer,
  ImageStyle,
  ImageTitleStyle,
} from "../../styles/listStyles";

import {
  FixedContainer,
  UploadBtn,
  GoExhibitionBtn,
  ArrowStyle,
} from "./styles";

interface DetailProps {
  id: number;
  type: string;
}

const ExhibitionList = () => {
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { data } = useSelector((state: RootState) => state.exhibitionList);

  useEffect(() => {
    dispatch(exhibitionListActions.getExhibitionListStart());
  }, []);

  // 상세 페이지로 이동
  const goDetail = ({id, type}: DetailProps) => {
    if (type === "MP") {
      navigate(`/detail/${id}`);
    } else {
      navigate(`/detail/painting/${id}`)
    }
   
  };

  // 전시회 입장 페이지로 이동
  const goExhibition = () => {
    navigate("/exhibition");
  };

  // 사진 업로드 모달 열기
  const openUpload = () => {
    if (data.length === 10) {
      alert("전시회 목록은 최대 10개까지 가능합니다.");
      return;
    }
    openModal({
      type: "upload",
      title: "작품 업로드하기",
      content: <Form type="exhibitionList" />,
    });
  };

  console.log("데이터는?", data);

  return (
    <div>
      <ImageContainer ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImageStyle key={item.paintingId} onClick={() => goDetail({id: item.paintingId, type: item.dtype})}>
              {
                <img
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  alt="전시회 이미지"
                ></img>
              }
              <ImageTitleStyle>{item.title}</ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
      <FixedContainer>
        <UploadBtn onClick={openUpload}>
          <Btn type="transparent" text="Upload" language="en" />
        </UploadBtn>
        <GoExhibitionBtn onClick={goExhibition}>
          Go Exhibition
          <ArrowStyle />
        </GoExhibitionBtn>
      </FixedContainer>
    </div>
  );
};

export default ExhibitionList;
