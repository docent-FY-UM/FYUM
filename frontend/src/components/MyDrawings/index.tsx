import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyDrawingsListApi } from "../../store/api";

import {
  ImageContainer,
  ImgtitleContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
  FixedContainer,
  UploadBtn,
  GoPageBtn,
  ArrowStyle,
} from "../../styles/listStyles";

import { useHorizontalScroll } from "../utils/useSideScroll";

const MyDrawings = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);

  useEffect(() => {
    const getMyDrawings = async () => {
      try {
        const res = await getMyDrawingsListApi();
        setData(res.data);
        console.log("데이터는?", res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyDrawings();
  }, []);

  const goDetail = (id: number) => {
    navigate(`/detail/painting/${id}`);
  };

  const goDrawing = () => {
    navigate("/drawing");
  };

  return (
    <>
      <ImageContainer className="artlist exhibition-list" ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImgtitleContainer className="artlist exhibition-list" key={item.paintingId}>
              <ImageStyle
                className="artlist"
                key={item.paintingId}
                onClick={() => goDetail(item.paintingId)}
              >
                {
                  <ImgSrcStyle
                    className="artlist"
                    src={item.imgSrc}
                    referrerPolicy="no-referrer"
                    alt="전시회 이미지"
                    key={`image-${item.paintingId}`}
                  />
                }
              </ImageStyle>
              <ImageTitleStyle key={`title-${item.paintingId}`}>
                {item.title}
              </ImageTitleStyle>
            </ImgtitleContainer>
          ))}
      </ImageContainer>
      <FixedContainer>
        <GoPageBtn onClick={goDrawing}>
          Go Drawing
          <ArrowStyle />
        </GoPageBtn>
      </FixedContainer>
    </>
  );
};

export default MyDrawings;
