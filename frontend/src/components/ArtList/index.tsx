import { ArtListContainer, ImageContainer, ImageStyle, Temp } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef, EventHandler } from "react";

const ArtList = () => {
  const navigate = useNavigate();
  const [artListData, setArtListData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef();

  let currentUrl = window.location.pathname.split("/");

  useEffect(() => {
    setArtListData([]);
  }, []);

  const getArtListDatas = async (page: number) => {
    const artListQuery = {};
    const accessToken = localStorage.getItem("token");
    const artListUrl = window.location.pathname.includes("painter")
      ? "painters"
      : window.location.pathname.includes("art")
      ? "trends"
      : "themes";

    const res: any = await axios.get(
      `http://k8d203.p.ssafy.io:1234/api/paintings/${artListUrl}/${currentUrl[3]}`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    console.log(res);
    const data = await res.data.content;
    setArtListData(data);
  };

  useEffect(() => {
    getArtListDatas(page);
  }, [page]);

  const goDetail = (id: number) => {
    alert("이동하게 하기" + id);
    navigate(`/detail/${id}`);
  };
  return (
    <ArtListContainer>
      <ImageContainer>
        {artListData.map((item: any) => (
          <ImageStyle key={item.paintingId} onClick={() => goDetail(item.id)}>
            {item.imgSrc ? (
              <img src={item.imgSrc} referrerPolicy="no-referrer"></img>
            ) : (
              <div></div>
            )}
          </ImageStyle>
        ))}
      </ImageContainer>
    </ArtListContainer>
  );
};
export default ArtList;
