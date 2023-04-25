import styled from "styled-components";
import { pink, white } from "../../../styles/colors";

export const Main2Img1Style = styled.img`
  width: 43%;
  min-width: 300px;
  height: 78%;
  top: 13%;

  position: absolute;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 78%;
    padding-top: 0px;
  }
`;

export const Main2Img2Style = styled.img`
  width: 58%;
  min-width: 400px;
  height: 53%;

  z-index: 2;

  position: absolute;
  bottom: 23%;
  right: 0;

  @media (max-width: 768px) {
    display: none;
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
    top: 13%;

    @media (max-width: 768px) {
      top: 11%;
      right: 15%;
    }
  }

  &.title {
    font-weight: 700;
    font-size: 6.4vw;
    position: absolute;
    bottom: 6%;
    z-index: 3;
    right: 0;

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
    top: 15%;
    display: flex;
    align-items: center;
    justify-content: end;

    &:hover {
      cursor: pointer;
      color: ${pink[200]};

      &:not(:hover) {
        color: ${white};
      }
    }

    @media (max-width: 768px) {
      position: static;
    }
  }
`;
