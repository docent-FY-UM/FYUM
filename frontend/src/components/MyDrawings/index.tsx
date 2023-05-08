import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyDrawingsListApi } from "../../store/api";

import {
  ImageContainer,
  ImageStyle,
  ImageTitleStyle,
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

  return (
    <div>
      <ImageContainer ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImageStyle
              key={item.paintingId}
              onClick={() => goDetail(item.paintingId)}
            >
              {
                <img
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  alt="전시회 이미지"
                  key={`image-${item.paintingId}`}
                ></img>
              }
              <ImageTitleStyle key={`title-${item.paintingId}`}>
                {item.title}
              </ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
    </div>
  );
};

export default MyDrawings;
