import styled, { css } from "styled-components";
import { pink, white } from "../../../styles/colors";

export const Main2Img1Container = styled.div<{ isanimation: string }>`
  width: 43%;
  min-width: 300px;
  height: 75%;
  top: 13%;

  position: absolute;
  z-index: 2;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-center 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.4s;
      opacity: 0;
    `}

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 75%;
    padding-top: 0px;
  }
`;

export const Main2Img2Container = styled.div<{ isanimation: string }>`
  width: 62%;
  min-width: 400px;
  height: 50%;

  position: absolute;
  bottom: 25%;
  right: 0;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-hor-left 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.4s;
      opacity: 0;
    `}

  @keyframes scale-in-ver-top {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
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
    top: 13%;

    ${({ isanimation }) =>
      isanimation === "true" &&
      css`
        animation: scale-in-ver-top 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
        animation-delay: 0.4s;
        opacity: 0;
      `}

    @media (max-width: 768px) {
      top: 12.5%;
      right: 15%;
    }
  }

  &.title {
    font-weight: 700;
    font-size: 6.7vw;
    position: absolute;
    bottom: 8.5%;
    z-index: 3;
    right: 0;

    ${({ isanimation }) =>
      isanimation === "true" &&
      css`
        animation: scale-in-hor-right 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
        animation-delay: 1s;
        opacity: 0;
      `}

    @keyframes scale-in-hor-right {
      0% {
        transform: scaleX(0);
        transform-origin: 100% 100%;
        opacity: 1;
      }
      100% {
        transform: scaleX(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }
    }

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
    top: 16%;
    display: flex;
    align-items: center;
    justify-content: end;

    
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${pink[200]};
      }
    }

    @media (max-width: 768px) {
      position: static;
    }
    
  }
`;
