import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRecommendApi } from "../../store/api";
import { useHorizontalScroll } from "../utils/useSideScroll";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  ImageContainer,
  ImgtitleContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
} from "../../styles/listStyles";

const RecommendList = () => {
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRecomData = async () => {
      try {
        const res = await getRecommendApi();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecomData();
  }, []);

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <ImageContainer className="etc" ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImgtitleContainer key={item.paintingId} className="artlist">
              <ImageStyle
                className="artlist"
                onClick={() => goDetail(item.paintingId)}
              >
                {
                  <ImgSrcStyle
                    className="artlist"
                    src={item.imgSrc}
                    referrerPolicy="no-referrer"
                    alt="추천 이미지"
                    effect="blur"
                  />
                }
              </ImageStyle>
              <ImageTitleStyle length={item.title.length}>
                {item.title}
              </ImageTitleStyle>
            </ImgtitleContainer>
          ))}
      </ImageContainer>
    </>
  );
};

export default RecommendList;
