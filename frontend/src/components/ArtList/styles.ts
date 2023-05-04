import styled from "styled-components";
import { black, mainColor, white } from "../../styles/colors";
import BackImg from "../../assets/images/artListBackground.png";

export const ArtListContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${BackImg});
`;
export const ImageContainer = styled.div<{ ref: any }>`
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
    display: block;
  }
`;

export const ImageStyle = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  cursor: pointer;
  box-shadow: 20px 20px 10px 5px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const ImageTitleStyle = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 110%;
`;

export const Temp = styled.div`
  background-color: pink;
  color: pink;
  height: 100%;
  width: 100%;
`;
