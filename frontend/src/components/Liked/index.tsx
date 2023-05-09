import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { likedListApi } from "../../store/api";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { ImageContainer } from "../../styles/listStyles";
import { ImageTitleStyle, ImageStyle, NoContent } from "./styles";

const LikedList = () => {
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLikedData = async () => {
      try {
        const res = await likedListApi();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLikedData();
  }, []);

  console.log(data.length);
  const len = data.length;
  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <ImageContainer ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImageStyle
              key={item.paintingId}
              onClick={() => goDetail(item.paintingId)}
              len={len}
            >
              {
                <img
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  style={{ maxWidth: "100vw" }}
                ></img>
              }
              <ImageTitleStyle>{item.title}</ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
    </div>
  );
};

export default LikedList;
