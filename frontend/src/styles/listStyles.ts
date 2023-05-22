import styled from "styled-components";
import { white, black, pink } from "./colors";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as RightArrowIc } from "../assets/icon/rightArrowIc.svg";

export const ListBackgroundContainer = styled.div<{ backgroundimg: string }>`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.backgroundimg});

  display: flex;
  flex-direction: column;

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
  display: flex;
  height: 65%;
  width: 95%;
  gap: 93px;
  margin-top: 30px;
  overflow-y: hidden;

  padding-right: 30px;

  &.artlist {
    margin-top: 0px;
    height: 80%;
    align-items: center;

    &.exhibition-list {
      height: 65%;
    }
  }

  &.etc {
    margin-top: 0px;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: 72%;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 100px;
    padding-right: 0px;

    &.artlist {
      margin-top: 60px;

      &.exhibition-list {
        margin-top: 10px;
      }
    }

    &.etc {
      margin-top: 0px;
    }
  }
`;

export const ImageStyle = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  width: 280px;
  height: 330px;
  display: flex;
  cursor: pointer;
  position: relative;

  &.artlist {
    width: auto;
    min-width: 240px;
    max-width: 150%;
    height: auto;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    height: 90%;
    width: 95%;
    margin-top: 20px;
    margin-left: 0px;
  }
`;

export const ImgSrcStyle = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  box-shadow: 20px 20px 10px 5px rgba(0, 0, 0, 0.25);
`;

export const ImgtitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 55px;

  &.artlist {
    width: auto;
    height: auto;
    gap: 40px;

    &.exhibition-list {
      gap: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 80%;
    gap: 60px;

    &.artlist {
      width: 70%;
      height: 80%;
      gap: 40px;
    }
  }
`;

export const ImageTitleStyle = styled.div<{ title?: string; length?: number }>`
  font-weight: 500;
  font-size: ${(props) =>
    props.length && props.length >= 30 ? "15px" : "18px"};
  width: 100%;
  text-align: center;

  color: ${(props) => (props.title === "artList" ? `${black}` : `${white}`)};

  @media (max-width: 768px) {
  }
`;

export const ListPageEnd = styled.div`
  width: 20px;
  height: 100%;
  margin-right: 20px;
  visibility: hidden;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    height: 20px;
    margin-bottom: 20px;
  }
`;

export const InvisibleBox = styled.div`
  width: 800%;
  height: 800%;
  visibility: hidden;
`;

export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0%;
  width: 100%;
`;

export const UploadBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
`;

export const GoPageBtn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "SUIT";
  font-weight: 900;
  font-size: 20px;
  line-height: 44px;
  color: ${white};
  margin-right: 5px;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${pink[200]};
    }
  }
`;

export const ArrowStyle = styled(RightArrowIc)`
  width: 52px;
  height: 13px;
  fill: ${white};
`;
