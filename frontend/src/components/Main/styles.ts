import styled from "styled-components";
import { black, white, pink } from "../../styles/colors";

import { ReactComponent as RightArrowIc } from "../../assets/icon/rightArrowIc.svg";

export const BackgroundStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${black};

  &.test {
    background-color: pink;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
  }
`;

export const FontStyle = styled.div`
  color: white;

  &.exp {
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    writing-mode: vertical-rl;
    position: absolute;
    right: 5%;
  }

  &.title {
    font-weight: 700;
    font-size: 7vw;
    position: absolute;
    bottom: 0px;
    z-index: 3;

    @media (max-width: 768px) {
      position: static;
      font-size: 8.8vw;
    }
  }

  &.view {
    font-weight: 700;
    font-size: 28px;
    line-height: 47px;
    position: absolute;
    right: 0px;
    top: 18%;
    display: flex;
    align-items: center;
    justify-content: end;

    &:hover {
      cursor: pointer;
      color: ${pink[200]};
    }

    @media (max-width: 768px) {
      position: static;
    }
  }
`;

export const RightArrowIcStyle = styled(RightArrowIc)`
  width: 52px;
  height: 16px;
  fill: ${white};
  margin-left: 10px;
  padding-top: 5px;
`;

export const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    grid-row: 3 / span 6;
  }
`;

export const MainGridItems = styled.div`
  grid-column: 2 / span 4;
  position: relative;

  @media (max-width: 768px) {
    grid-column: 3 / span 9;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MainGridFontItem = styled.div`
  grid-column: 1 / span 1;
  position: relative;
  padding-top: 80px;

  z-index: 1;

  @media (max-width: 768px) {
    grid-column: 2 / span 1;
    display: flex;
    justify-content: center;
  }
`;

export const MainImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;

  transition: transform 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
