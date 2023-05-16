import styled, { css } from "styled-components";
import { pink } from "../../../styles/colors";

export const Main1Img1Container = styled.div<{ isanimation: string }>`
  width: 35%;
  min-width: 300px;
  height: 60%;
  top: 13.5%;

  position: absolute;
  z-index: 2;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-hor-left 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.2s;
      opacity: 0;
    `}

  @keyframes scale-in-hor-left {
    0% {
      transform: scaleX(0);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 45%;
    padding-top: 0px;
  }
`;

export const Main1Img2Container = styled.div<{ isanimation: string }>`
  width: 70%;
  min-width: 400px;
  height: 55%;

  position: absolute;
  bottom: 15%;
  right: 0;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-center 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.2s;
      opacity: 0;
    `}

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FontStyle = styled.div<{ isanimation?: string }>`
  color: white;

  &.exp {
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    writing-mode: vertical-rl;
    position: absolute;
    right: 5%;
    padding-top: 20px;

    ${({ isanimation }) =>
      isanimation === "true" &&
      css`
        animation: scale-in-ver-top 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
        animation-delay: 0.2s;
        opacity: 0;
      `}

    @keyframes scale-in-ver-top {
      0% {
        transform: scaleY(0);
        transform-origin: 0% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      font-size: 20px;
      top: 25%;
      right: 15%;
    }
  }

  &.title {
    font-weight: 700;
    font-size: 6.8vw;
    position: absolute;
    bottom: 6%;
    z-index: 3;

    ${({ isanimation }) =>
      isanimation === "true" &&
      css`
        animation: scale-in-hor-left 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
        animation-delay: 0.8s;
        opacity: 0;
      `}

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

    @media (max-width: 768px) {
      position: static;
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${pink[200]};
      }
    }
  }
`;
