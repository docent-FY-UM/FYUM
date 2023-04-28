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
