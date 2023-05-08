import styled from "styled-components";
import { white } from "./colors";

export const ListBackgroundContainer = styled.div<{ backgroundimg: string }>`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.backgroundimg});

  @media screen and (max-width: 768px) {
    overflow-y: visible;
  }
`;

export const ListTitleContainer = styled.div`
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
    padding-top: 70px;
  }
`;
export const ImageContainer = styled.div<{ ref: any }>`
  align-items: center;
  display: flex;
  height: 79%;
  width: 100%;
  position: absolute;
  top: 12%;
  overflow-y: hidden;
  margin: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: inline-block;
    top: 21%;
    overflow-y: scroll;
  }
`;

export const ImageStyle = styled.div<{ title?: string | null }>`
  height: 60%;
  width: 100%;
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  cursor: pointer;
  box-shadow: 20px 20px 10px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  margin-top: ${(props) => (props.title === "artList" ? "4.5%" : "0%")};
  color: ${(props) => (props.title === "artList" ? `${white}` : "")};

  @media (max-width: 768px) {
    width: 50%;
    box-shadow: none;
    left: 10%;
    margin-bottom: 20%;
  }
`;

export const ImageTitleStyle = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 110%;
  @media (max-width: 768px) {
    top: 100%;
  }
`;
