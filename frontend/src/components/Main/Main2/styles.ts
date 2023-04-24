import styled from "styled-components";

export const Main2Img1 = styled.img`
  width: 40%;
  min-width: 300px;
  height: 65%;
  padding-top: 80px;

  position: absolute;
  z-index: 2;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: 70%;
    padding-top: 0px;
  }
`;

export const Main2Img2 = styled.img`
  width: 70%;
  min-width: 400px;
  height: 60%;

  position: absolute;
  bottom: 10%;
  right: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
