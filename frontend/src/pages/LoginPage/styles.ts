import styled from "styled-components";
import kakaoImg from "../../assets/images/kakao_login_large_wide.png";
import BackgroundImg from "../../assets/images/loginImg1.png";
import { white } from "../../styles/colors";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;

export const BackgroundImgStyle = styled.img.attrs({
  src: `${BackgroundImg}`,
})`
  width: 100vw;
  height: 100%;
  object-fit: fill;
  filter: brightness(40%);

  @media (max-width: 412px) {
    object-fit: cover;
  }
`;

export const LoginContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 25vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 412px) {
    width: 60vw;
    top: 55%;
  }
`;

export const LoginTitleFontStyle = styled.p`
  color: ${white};
  font-size: 6vw;
  margin: 0;
  padding: 0;

  @media (max-width: 412px) {
    font-size: 15vw;
  }
`;

export const HrStyle = styled.hr`
  color: ${white};
  border: 0.2vh ${white} solid;
  margin-bottom: 5vh;

  @media (max-width: 412px) {
    border: 0.1vh ${white} solid;
    width: 80%;
    margin-bottom: 30vh;
  }
`;

export const KakaoBtn = styled.img.attrs({
  src: `${kakaoImg}`,
})`
  width: 90%;
  cursor: pointer;

  &:hover {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 412px) {
    width: 60vw;
    margin-top: 60%;
  }
`;
