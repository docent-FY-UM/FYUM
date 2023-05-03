import styled from "styled-components";
import { white, mainColor, pink } from "../../../styles/colors";

interface BtnStyleProps {
  language?: string | undefined;
  width?: number | undefined;
  widthM?: number | undefined;
}

export const BtnStyle = styled.button<BtnStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};

  &.Btn_square {
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.71);
    border: 3.5px solid ${white};
    padding: 18px 40px;

    @media screen and (max-width: 768px) {
      width: ${(props) => (props.widthM ? props.widthM + "px" : "auto")};
      border: 3px solid ${white};
      padding: 18px 0 18px 0;
    }
  }

  &.Btn_transparent {
    background-color: transparent;
    border: 4px solid ${white};
    border-radius: 17px;
    height: 90px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
      width: ${(props) => (props.width ? props.width / 2.1 + "px" : "auto")};
      height: 43px;
      border: 2.38px solid ${white};
    }
  }

  &.Btn_attachment {
    background-color: ${mainColor};
    border: none;
    border-radius: 10px;
    height: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (hover: hover) {
      &:hover {
        background-color: ${pink[300]};
      }
    }
  }

  &.Btn_upload {
    background-color: ${mainColor};
    border: none;
    border-radius: 10px;
    height: 55px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
      width: ${(props) => (props.width ? props.width / 1.6 + "px" : "auto")};
      height: 40px;
    }
  }
`;

export const BtnText = styled.span<BtnStyleProps>`
  color: ${white};
  font-family: ${({ language }) =>
    language === "en" ? "Kim jung chul Myungjo" : "SUIT"};
  font-weight: 700;

  &.Btn_square {
    font-size: 18px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  &.Btn_transparent {
    font-size: 36px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  &.Btn_attachment {
    font-family: ${({ language }) =>
      language === "en" ? "Kim jung chul Myungjo" : "SUIT"};
    font-size: 15px;
  }

  &.Btn_upload {
    font-size: 20px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
