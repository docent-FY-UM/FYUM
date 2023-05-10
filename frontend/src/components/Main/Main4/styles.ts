import styled, { css } from "styled-components";
import { pink, white } from "../../../styles/colors";

export const Main4Img1Container = styled.div<{ isanimation: string }>`
  width: 43%;
  min-width: 300px;
  height: 78%;
  top: 13%;

  position: absolute;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-hor-left 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.4s;
      opacity: 0;
    `}

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 55%;
    padding-top: 0px;
  }
`;

export const Main4Img2Container = styled.div<{ isanimation: string }>`
  width: 58%;
  min-width: 400px;
  height: 53%;

  z-index: 2;
  position: absolute;
  bottom: 23%;
  right: 0;
  overflow: hidden;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: scale-in-center 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
      animation-delay: 0.4s;
      opacity: 0;
    `}

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
      font-size: 20px;
      top: 22.5%;
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

    ${({ isanimation }) =>
      isanimation === "true" &&
      css`
        animation: scale-in-hor-right 1s cubic-bezier(0.4, 0.4, 0.3, 1) forwards;
        animation-delay: 1s;
        opacity: 0;
      `}

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
