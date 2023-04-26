import styled from "styled-components";
import PainterImg from "../../assets/images/earing.png";
import ArtTrendImg from "../../assets/images/sonofman.png";
import ThemeImg from "../../assets/images/monalisa.png";
import PainterNoBackImg from "../../assets/images/earingNoBackground.png";
import ArtTrendNoBackImg from "../../assets/images/sonofmanNoBackground.png";
import ThemeNoBackImg from "../../assets/images/monalisaNoBackground.png";
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
export const PainterNoBackContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    background-image: url(${PainterNoBackImg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 40%;
    height: 80%;
    bottom: 0px;
    right: 0px;
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
export const ArtTrendNoBackContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    background-image: url(${ArtTrendNoBackImg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 40%;
    height: 80%;
    bottom: 0px;
    left: 10%;
  }
`;

export const ThemeContainer = styled.div`
  background-image: url(${ThemeImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 3/4;
  width: 100%;
  height: 100%;
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
export const ThemeNoBackContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    background-image: url(${ThemeNoBackImg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 40%;
    height: 80%;
    bottom: 0px;
    right: 0px;
  }
`;

export const ImageText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 4vw;
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
