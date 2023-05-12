import styled from "styled-components";
import { white, black } from "../../styles/colors";
import NotFoundImg from "../../assets/images/ophelia.png";

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${black};
  overflow-y: hidden;
`;

export const BackgroundImg = styled.img.attrs({
  src: `${NotFoundImg}`,
})`
  width: 100%;
  height: 100%;
  filter: brightness(30%);

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

export const Content = styled.p`
  position: absolute;
  text-align: center;
  font-size: 3vw;
  color: ${white};
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
