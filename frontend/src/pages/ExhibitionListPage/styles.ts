import styled from "styled-components";
import { white } from "../../styles/colors";

import BackgroundImg from "../../assets/images/ExhibitionListBackground.png";

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImg});

  @media screen and (max-width: 768px) {
    overflow-y: visible;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;

  color: white;
  font-weight: 700;
  font-size: 54px;
  line-height: 83px;

  margin-bottom: 0%;

  text-align: center;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-position: under;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
