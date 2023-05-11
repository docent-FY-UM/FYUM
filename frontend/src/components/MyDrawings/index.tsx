import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyDrawingsListApi } from "../../store/api";

import {
  ImageContainer,
  ImgtitleContainer,
  ImageStyle,
  ImgSrcStyle,
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
    <>
      <ImageContainer className="etc" ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImgtitleContainer className="artlist" key={item.paintingId}>
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
    </>
  );
};

export default MyDrawings;
