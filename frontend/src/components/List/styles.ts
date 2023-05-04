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
`;

export const ImageContainer = styled.div<{ ref: any }>`
  align-items: center;
  display: flex;
  height: 80%;
  width: 100%;
  position: absolute;
  top: 12%;
  overflow-y: scroll;
  margin: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: inline-block;
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

export const Card = styled.div`
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-right: 10px;
  min-width: 300px;
`;

export const Temp = styled.div`
  background-color: pink;
  color: pink;
  height: 100%;
  width: 100%;
`;

export const ListPageEnd = styled.div`
  visibility: hidden;
`;
