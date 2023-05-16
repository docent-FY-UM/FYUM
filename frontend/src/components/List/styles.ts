import styled from "styled-components";
import PainterBackImg from "../../assets/images/listPainterBackground.png";
import ArtTrendBackImg from "../../assets/images/listArtTrendBackground.png";
import ThemeBackImg from "../../assets/images/listThemeBackground.png";
import ExListBackImg from "../../assets/images/exListBackgroundImg.png";
import MyDrawingBackImg from "../../assets/images/myDrawingsBackgroundImg.png";
import RecommendationBackImg from "../../assets/images/recommendPageImg.png";
import LikedBackImg from "../../assets/images/likedPageImg.png";

import FrameImg from "../../assets/images/frameImg.png";

export const ListContainer = styled.div<{ add: string }>`
  height: 100%;
  width: 100%;
  background-image: ${(props) =>
    props.add === "painter"
      ? `url(${PainterBackImg})`
      : props.add === "art-trend"
      ? `url(${ArtTrendBackImg})`
      : props.add === "theme"
      ? `url(${ThemeBackImg})`
      : props.add === "exhibition-list"
      ? `url(${ExListBackImg})`
      : props.add === "mydrawing"
      ? `url(${MyDrawingBackImg})`
      : props.add === "rec"
      ? `url(${RecommendationBackImg})`
      : `url(${LikedBackImg})`};

  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
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

export const FrameContainer = styled.div`
  position: absolute;
  right: 3%;
  bottom: 3%;
  width: 101%;
  height: 102%;
`;

export const Frame = styled.img.attrs({
  src: `${FrameImg}`,
})`
  object-fit: fill;
  width: 120%;
  height: 120%;
`;
