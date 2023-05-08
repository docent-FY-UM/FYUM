import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRecommendApi } from "../../store/api";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { ImageContainer, ImageStyle } from "../../styles/listStyles";
import { ImageTitleStyle } from "./styles";

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
    <div>
      <ImageContainer ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImageStyle key={item.id} onClick={() => goDetail(item.paintingId)}>
              {
                <img
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  alt="추천 이미지"
                ></img>
              }
              <ImageTitleStyle>{item.titleOrigin}</ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
    </div>
  );
};

export default RecommendList;
