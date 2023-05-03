import { useState, useEffect, useRef, EventHandler } from "react";
import { useNavigate } from "react-router-dom";

import {
  ListContainer,
  ImageContainer,
  Card,
  ImageStyle,
  Temp,
} from "./styles";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]); //받아온 데이터 저장
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef(); //페이지 끝부분

  const [scrollPosition, setScrollPosition] = useState(0);

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
    const listQuery = {};
    const accessToken = localStorage.getItem("token");
    const listUrl = window.location.pathname.includes("painter")
      ? "painters"
      : window.location.pathname.includes("art")
      ? "trends"
      : "themes";

    const res: any = await axios.get(
      `http://k8d203.p.ssafy.io:1234/api/paintings/${listUrl}/?page=1`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    // .then((res) => {
    console.log(res);
    // });

    const data = await res.data.content;
    setListData(data);
    // if (data.length === 0) {
    //   if (page === 0) {
    //   }
    // }else{
    //   if()
    // }
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

  // const [isRight, setIsRight] = useState(false);
  // const fetchMoreData = () => {
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=10`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems([...items, ...data] as any);
  //       setPage(page + 1);
  //     });
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition =
  //       window.innerWidth + document.documentElement.scrollLeft;
  //     const scrollWidth = document.documentElement.offsetWidth;
  //     const right = scrollPosition === scrollWidth;

  //     setIsRight(right);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
  //     .then((response) => response.json())

  //     .then((data) => {
  //       setItems(data);
  //     });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [page]);

  // useEffect(() => {
  //   if (isRight) {
  //     fetchMoreData();
  //   }
  // }, [isRight]);

  // const renderCard = (item: any) => {
  //   const url = item;
  //   console.log(url);
  //   return (
  //     <Card key={item.paintingId}>
  //       <h2>{item.title}</h2>
  //       <img src={url} style={{ height: "100px", width: "100px" }}></img>
  //     </Card>
  //   );
  // };

  let currentUrl = window.location.pathname.split("/");

  const goArtList = (id: number) => {
    alert("이동하게 하기" + id);
    navigate(`/artlist/${currentUrl[2]}/${id}`);
  };

  return (
    <ListContainer add={currentUrl[2]}>
      <ImageContainer>
        {listData.map((item: any) => (
          <ImageStyle paintingId={item.id} onClick={() => goArtList(item.id)}>
            {item.imgSrc ? (
              <img src={item.imgSrc} referrerPolicy="no-referrer"></img>
            ) : (
              <Temp></Temp>
            )}
          </ImageStyle>
        ))}
      </ImageContainer>
    </ListContainer>
  );
};
export default List;
