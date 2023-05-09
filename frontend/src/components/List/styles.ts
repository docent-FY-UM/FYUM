import styled from "styled-components";
import PainterBackImg from "../../assets/images/listPainterBackground.png";
import ArtTrendBackImg from "../../assets/images/listArtTrendBackground.png";
import ThemeBackImg from "../../assets/images/listThemeBackground.png";

export const ListContainer = styled.div<{ add: string }>`
  height: 100%;
  width: 100%;
  background-image: ${(props) =>
    props.add === "painter"
      ? `url(${PainterBackImg})`
      : props.add === "art-trend"
      ? `url(${ArtTrendBackImg})`
      : `url(${ThemeBackImg})`};
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -3%;
    height: 103%;
  }
`;

export const ImageStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  cursor: pointer;
`;

export const ImageSrcStyle = styled.img<{ src: string }>`
  src: ${(props) => props.src};
  max-width: 100vw;
  @media screen and (max-width: 768px) {
    max-width: 150%;
  }
`;

export const ListPageEnd = styled.div`
  margin-left: -1%;
  /* visibility: hidden; */
`;
