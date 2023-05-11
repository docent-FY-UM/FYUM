import { ArtListContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { getArtListApi } from "../../store/api";
import { InvisibleBox } from "../../styles/listStyles";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  ImgtitleContainer,
  ImageContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
  ListPageEnd,
} from "../../styles/listStyles";

import { DescriptionBtn, DescriptionP } from "../../pages/DetailPage/styles";

import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBarSlice";

const ArtList = () => {
  const navigate = useNavigate();
  const [artListData, setArtListData] = useState([]);
  const [nameKr, setNameKr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [infoState, setInfoState] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef();
  const [onOff, setOnOff] = useState(true);
  const dispatch = useDispatch();

  let currentUrl = window.location.pathname.split("/");
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    setArtListData([]);
  }, []);
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const artListUrl = window.location.pathname.includes("painter")
    ? "painters"
    : window.location.pathname.includes("trend")
    ? "trends"
    : "themes";
  console.log(artListUrl);
  const getArtListDatas = async (page: number) => {
    const artListQuery = {};
    const accessToken = localStorage.getItem("token");
    const urlType = currentUrl[3];
    const res = await getArtListApi({ artListUrl, urlType, page });

    console.log(res);
    // if (artListUrl === "painters") {
    //   dispatch(
    //     sideBarActions.openSideBar([
    //       {
    //         nameKr: res.data.painterKr,
    //         nameEn: res.data.painterOrigin,
    //         info: res.data.description,
    //       },
    //     ])
    //   );
    // } else if (artListUrl === "trends") {
    //   dispatch(
    //     sideBarActions.openSideBar([
    //       { nameKr: res.data.painterKr, info: res.data.description },
    //     ])
    //   );
    // }
    const data = await res.data; //data.content->data
    if (artListUrl === "painters") {
      setNameKr(data.painterKr);
      setNameEn(data.painterOrigin);
    } else {
      setNameKr(data.trendKr);
      setNameEn(data.trendOrigin);
    }
    setInfoState(data.description);
    if (data.content.length === 0) {
      if (page === 0) {
        setArtListData(data.content); // 검색결과가 없는 경우
      }
    } else {
      if (page > prevPage) {
        setArtListData((prev) => [...prev, ...data.content] as any);
        setPrevPage(page);
      } else {
        setArtListData(data.content);
      }
    }
    setLoading(true);
  };

  useEffect(() => {
    getArtListDatas(page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        {
          threshold: 0.01,
        }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const scrollRef = useHorizontalScroll(window.innerWidth > 768);

  const changeState = () => {
    setOnOff(!onOff);
  };
  useEffect(() => {
    dispatch(
      sideBarActions.openSideBar([
        {
          nameKr: nameKr,
          nameEn: nameEn,
          info: infoState,
        },
      ])
    );
  }, [[nameKr, nameEn, infoState]]);

  return (
    <>
      {artListUrl === "themes" ? (
        <></>
      ) : onOff === true ? (
        <SideBar onOff={onOff} setOnOff={setOnOff}></SideBar>
      ) : (
        <></>
      )}
      <ArtListContainer>
        <ImageContainer className="artlist" ref={scrollRef}>
          {artListData.map((item: any) => (
            <ImgtitleContainer className="artlist">
              <ImageStyle
                className="artlist"
                key={item.paintingId}
                onClick={() => goDetail(item.paintingId)}
              >
                <ImgSrcStyle
                  className="artlist"
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  effect="blur"
                />
              </ImageStyle>
              {item.titleOrigin === null ? (
                <ImageTitleStyle title={"artList"}>
                  {item.titleKr}
                </ImageTitleStyle>
              ) : (
                <ImageTitleStyle title={"artList"}>
                  {item.titleOrigin}
                </ImageTitleStyle>
              )}
            </ImgtitleContainer>
          ))}
           {artListData.length < 4 && <InvisibleBox />}
          <ListPageEnd ref={pageEnd}></ListPageEnd>
        </ImageContainer>
        {artListUrl === "themes" ? (
          <></>
        ) : (
          <DescriptionBtn onClick={changeState}>
            <DescriptionP info={true}>Info.</DescriptionP>
          </DescriptionBtn>
        )}
      </ArtListContainer>
    </>
  );
};
export default ArtList;
