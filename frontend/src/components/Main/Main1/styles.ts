import styled from "styled-components";
import { pink, white } from "../../../styles/colors";

export const Main1Img1Style = styled.img`
  width: 35%;
  min-width: 300px;
  height: 60%;
  top: 13.5%;

  position: absolute;
  z-index: 2;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 70%;
    padding-top: 0px;
  }
`;

////

export const Main1Img1Container = styled.div`
  width: 35%;
  min-width: 300px;
  height: 60%;
  top: 13.5%;

  position: absolute;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 70%;
    padding-top: 0px;
  }

  animation: fadeIn1 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;

  @keyframes fadeIn1 {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Main1Img1Style2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

////

export const Main1Img2Style = styled.img`
  width: 70%;
  min-width: 400px;
  height: 55%;

  position: absolute;
  bottom: 15%;
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
    padding-top: 20px;

    @media (max-width: 768px) {
      top: 11%;
      right: 15%;
    }
  }

  &.title {
    font-weight: 700;
    font-size: 6.8vw;
    position: absolute;
    bottom: 6%;
    z-index: 3;

    @media (max-width: 768px) {
      position: static;
      font-size: 8.4vw;
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

      &:not(:hover) {
        color: ${white};
      }
    }

    @media (max-width: 768px) {
      position: static;
    }
  }
`;
