import styled from "styled-components";
import PainterImg from "../../assets/images/gogh.png";
import ArtTrendImg from "../../assets/images/sonofman.png";
import ThemeImg from "../../assets/images/earing.png";
import PainterNoBackImg from "../../assets/images/goghNoBackground.png";
import ArtTrendNoBackImg from "../../assets/images/sonofmanNoBackground.png";
import ThemeNoBackImg from "../../assets/images/earingNoBackground.png";
import { white } from "../../styles/colors";

export const CollectionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  cursor: pointer;
  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const PainterContainer = styled.div`
  background-image: url(${PainterImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  filter: brightness(40%);

  &:hover {
    filter: brightness(100%);
  }

  @media (max-width: 768px) {
    position: relative;
    grid-column: 1/1;
    grid-row: 1/2;
    background-image: none;
    background-color: #003b2b;
    filter: brightness(100%);
  }
`;

export const PainterNoBackContainer = styled.img.attrs({
  src: `${PainterNoBackImg}`,
})`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 75%;
    bottom: 0px;
    right: 20px;

    min-width: 200px;
  }
`;

export const ArtTrendContainer = styled.div`
  background-image: url(${ArtTrendImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  filter: brightness(40%);

  &:hover {
    filter: brightness(100%);
  }

  @media (max-width: 768px) {
    position: relative;

    grid-column: 1/1;
    grid-row: 2/3;
    background-image: none;
    background-color: #183138;
    filter: brightness(100%);
  }
`;

export const ArtTrendNoBackContainer = styled.img.attrs({
  src: `${ArtTrendNoBackImg}`,
})`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    width: 140px;
    height: 87%;
    bottom: 0px;
    left: 10%;
    min-width: 140px;
  }
`;

export const ThemeContainer = styled.div`
  background-image: url(${ThemeImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 3/4;
  width: 100%;
  height: 100%;
  position: relative;

  filter: brightness(40%);
  &:hover {
    filter: brightness(100%);
  }
  @media (max-width: 768px) {
    grid-column: 1/1;
    grid-row: 3/4;
    background-image: none;
    background-color: #672324;
    filter: brightness(100%);
  }
`;

export const ThemeNoBackContainer = styled.img.attrs({
  src: `${ThemeNoBackImg}`,
})`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    width: 150px;
    height: 85%;
    bottom: 0px;
    right: 40px;
    min-width: 150px;
  }
`;

export const ImageText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 4vw;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

export const PainterText = styled.div`
  position: absolute;
  left: 30%;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 25%;
    left: 15%;
    z-index: 2;
  }
`;

export const ArtTrendText = styled.div`
  position: absolute;
  left: 20%;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 25%;
    left: 50%;
  }
`;
export const ThemeText = styled.div`
  position: absolute;
  left: 30%;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 25%;
    left: 15%;
  }
`;
