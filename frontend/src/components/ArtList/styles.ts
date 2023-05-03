import styled from "styled-components";
import { black, mainColor, white } from "../../styles/colors";
import BackImg from "../../assets/images/artListBackground.png";

export const ArtListContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackImg});
`;
export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 80%;
  width: 100%;
  position: absolute;
  top: 12%;
  overflow-y: auto;
  margin: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const ImageStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  cursor: pointer;
`;

export const Temp = styled.div`
  background-color: pink;
  color: pink;
  height: 100%;
  width: 100%;
`;
