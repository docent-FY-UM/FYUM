import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useHorizontalScroll } from "../utils/useSideScroll";

import { ListContainer, FrameContainer, Frame } from "./styles";
import {
  ImageStyle,
  ImgtitleContainer,
  ImgSrcStyle,
  ImageTitleStyle,
  ListPageEnd,
} from "../../styles/listStyles";

import { getListApi } from "../../store/api";
import { ListTitleContainer, ImageContainer } from "../../styles/listStyles";

const List = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]); //받아온 데이터 저장
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef(); //페이지 끝부분

  const [prevPage, setPrevPage] = useState(0); //1로 하는게 맞는가?0으로 하는게 맞는가?

  //추후에 원점으로 돌아오는 버튼 구현해보기

  //새로고침 할 때마다 초기화
  useEffect(() => {
    setListData([]);
  }, []);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const getListDatas = async (page: number) => {
    const listUrl = window.location.pathname.includes("painter")
      ? "painters"
      : window.location.pathname.includes("trend")
      ? "trends"
      : "themes";

    const res = await getListApi({ listUrl, page });

    const data = await res.data.content;
    if (data.length === 0) {
      if (page === 0) {
        setListData(data); // 검색결과가 없는 경우
      }
    } else {
      if (page > prevPage) {
        setListData((prev) => [...prev, ...data] as any);
        setPrevPage(page);
      } else {
        setListData(data);
      }
    }
    setLoading(true);
  };
  useEffect(() => {
    getListDatas(page);
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
          threshold: 1,
        }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  let currentUrl = window.location.pathname.split("/");
  let title =
    currentUrl[2][0].toUpperCase() +
    currentUrl[2].slice(1, currentUrl[2].length);

  const goArtList = (id: number) => {
    navigate(`/artlist/${currentUrl[2]}/${id}`);
  };

  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  console.log(listData);
  // window.onresize = () => {
  //   window.location.reload();
  // };

  return (
    <>
      <ListContainer add={currentUrl[2]}>
        <ListTitleContainer>&nbsp;{title}&nbsp;</ListTitleContainer>
        <ImageContainer ref={scrollRef}>
          {listData.map((item: any) => (
            <ImgtitleContainer key={item.id}>
              <ImageStyle title={"artList"} onClick={() => goArtList(item.id)}>
                <ImgSrcStyle
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  alt="화가 이미지"
                />
                <FrameContainer>
                  <Frame />
                </FrameContainer>
              </ImageStyle>
              <ImageTitleStyle>{item.nameKr}</ImageTitleStyle>
            </ImgtitleContainer>
          ))}
          <ListPageEnd ref={pageEnd}></ListPageEnd>
        </ImageContainer>
      </ListContainer>
    </>
  );
};
export default List;
