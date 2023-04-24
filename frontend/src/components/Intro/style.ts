import styled from "styled-components";
import IntroImg from "../../assets/images/introImg.png";
import { white } from "../../styles/colors";

//배경사진
export const IntroDiv = styled.img.attrs({
  src: `${IntroImg}`,
})`
  height: 100vh;
  width: 100vw;
  object-fit: fill;
  position: absolute;
  z-index: -1;
  filter: brightness(40%);
  @media (max-width: 412px) {
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

  @media (max-width: 412px) {
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
  @media (max-width: 412px) {
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
  @media (max-width: 412px) {
    text-align: center;
    margin: -5%;
    font-size: 2vw;
  }
`;
export const MobileText = styled.div`
  display: none;
  @media (max-width: 412px) {
    display: inline-block;
    color: ${white};
    position: absolute;
    text-align: center;
    top: 80%;
    left: 35%;
    font-size: 7vw;
  }
`;
