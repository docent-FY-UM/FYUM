import styled, { keyframes } from "styled-components";
import { white } from "../../styles/colors";

interface ClickHereProps {
  position: { x: number; y: number };
}

// fadeIn 애니메이션 추가
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IntroDiv = styled.div`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: pointer;
`;

//배경영상
export const IntroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
  z-index: -1;

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

//텍스트를 감싸는 div
export const TextDiv = styled.div`
  margin: 1rem;
  /* height: 100%; */
  width: 100%;
  position: fixed;
  bottom: 0px;

  @media (max-width: 768px) {
    top: 27%;
    text-align: center;
    left: -4%;
  }
`;

export const LogoText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 8vw;
  margin-bottom: -3%;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    margin-bottom: 0%;

    text-align: center;
    font-size: 15.5vw;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-position: under;
  }
`;
export const IntroText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 3.4vw;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in forwards;
  animation-delay: 1s;

  @media (max-width: 768px) {
    text-align: center;
    margin: -3%;
    font-size: 2vw;
  }
`;

export const MobileText = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    color: ${white};
    position: absolute;
    text-align: center;
    top: 80%;
    left: 35%;
    font-size: 7vw;
  }
`;

export const ClickHere = styled.div<ClickHereProps>`
  transform: translate(
    ${(props) => props.position.x}px,
    ${(props) => props.position.y}px
  );

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ClickText = styled.p`
  color: gray;
`;
