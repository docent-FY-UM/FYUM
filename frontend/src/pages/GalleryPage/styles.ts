import styled from "styled-components";

import backImg from "../../assets/images/galleryPageImg.png";

export const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

export const BackgroundImg = styled.img.attrs({
  src: `${backImg}`,
})`
  height: 100%;
  width: 100%;
  object-fit: fill;
  filter: brightness(0.5);

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

export const BtnMoblieContainer = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 1;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  z-index: 1;

  &.exhibition {
    top: 45%;
    left: 10%;
  }

  &.drawing {
    top: 55%;
    left: 38%;
  }

  &.mydrawings {
    top: 50%;
    left: 60%;
  }

  &.wish {
    top: 33%;
    left: 76%;
  }

  @media screen and (max-width: 768px) {
    position: static;
  }
`;
