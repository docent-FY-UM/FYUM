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
  ImgtitleContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
  InvisibleBox,
  FixedContainer,
  UploadBtn,
  GoPageBtn,
  ArrowStyle,
} from "../../styles/listStyles";

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
  const goDetail = ({ id, type }: DetailProps) => {
    if (type === "MP") {
      navigate(`/detail/${id}`);
    } else if (type === "MD") {
      navigate(`/detail/painting/${id}`);
    } else {
      navigate(`/detail/picture/${id}`);
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
    <>
      <ImageContainer className="artlist exhibition-list" ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImgtitleContainer
              className="artlist exhibition-list"
              key={item.paintingId}
            >
              <ImageStyle
                className="artlist"
                key={item.paintingId}
                onClick={() =>
                  goDetail({ id: item.paintingId, type: item.dtype })
                }
              >
                {
                  <ImgSrcStyle
                    className="artlist"
                    src={item.imgSrc}
                    referrerPolicy="no-referrer"
                    alt="전시회 이미지"
                  />
                }
              </ImageStyle>
              <ImageTitleStyle length={item.title.length}>
                {item.title}
              </ImageTitleStyle>
            </ImgtitleContainer>
          ))}
        {data.length < 4 && <InvisibleBox />}
      </ImageContainer>
      <FixedContainer>
        <UploadBtn onClick={openUpload}>
          <Btn type="transparent" text="Upload" language="en" />
        </UploadBtn>
        <GoPageBtn onClick={goExhibition}>
          Go Exhibition
          <ArrowStyle />
        </GoPageBtn>
      </FixedContainer>
    </>
  );
};

export default ExhibitionList;
