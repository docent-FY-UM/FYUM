import styled from "styled-components";
import { black, white } from "../../styles/colors";

export const BackgroundContainer = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${black};

  /* overflow-y: hidden; */

  @media screen and (max-width: 768px) {
    overflow-y: visible;
  }
`;

export const GridItems = styled.div`
  height: 100%;
  grid-column: 2 / span 8;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  color: white;
  font-weight: 700;
  font-size: 54px;
  line-height: 83px;
`;

export const Underline = styled.div`
  border: 1.5px solid ${white};
  width: 18vw;
  margin-top: -12px;
`;

export const CanvasBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 40px;


  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    gap: 40px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    gap: 30px;
    margin-bottom: 40px;
  }
`;

export const RealFileBtn = styled.input`
  display: none;
`;

export const FileBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: auto;

  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.71);
  border: 3.5px solid ${white};
  padding: 18px 40px;

  @media screen and (max-width: 768px) {
    width: 250px;
    border: 3px solid ${white};
    padding: 18px 0 18px 0;
  }
`;

export const FileFontStyle = styled.span`
  color: ${white};
  font-weight: 700;

  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
