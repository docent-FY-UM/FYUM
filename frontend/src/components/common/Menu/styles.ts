import styled from "styled-components";
import { black, white, pink, mainColor } from "../../../styles/colors";

import { ReactComponent as CloseIc } from "../../../assets/icon/closeIc.svg";

export const BackgroundStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${black};
  position: fixed;
  z-index: 999999;
`;

export const InvisibleHeader = styled.div`
  height: 80px;
  background-color: transparent;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MenuGridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
`;

export const MenuGridItems = styled.div`
  grid-column: 2 / span 4;
  grid-row: 1 / span 3;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 10%;

  @media (max-width: 768px) {
    grid-column: 2 / span 4;
  }
`;

export const SelectedImgStyle = styled.img<{ angle: string }>`
  width: 35%;
  min-width: 35%;
  max-height: 100%;
  z-index: 1;
  border: 2px solid;
  opacity: 0;

  transform: rotate(${(props) => props.angle});
  transition: transform 0.5s ease-in-out;
  animation: menuFadeIn 0.5s ease-out forwards;

  @keyframes menuFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PreviousImgStyle = styled.img<{ angle: string }>`
  width: 35%;
  min-width: 35%;
  min-height: 100%;
  max-height: 100%;
  border: 2px solid;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
  transform: rotate(${(props) => props.angle});

  opacity: 0;
  animation: menuFadeIn 1.2s ease-out forwards;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 10%;
  max-height: 100%;
  opacity: 0;

  animation: menuListFadeIn 0.8s ease-out forwards;
  animation-delay: 0.25s;

  @keyframes menuListFadeIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    justify-content: start;
    margin-right: none;
    animation-delay: 0s;
  }
`;

export const MenuListFontStyle = styled.div`
  p {
    font-weight: 700;
    font-size: 40px;
    color: ${white};

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${mainColor};
      }
    }
  }
`;

export const CloseIcStyle = styled(CloseIc)`
  height: 20px;
  width: 20px;
  fill: ${white};
  margin-right: 40px;
  margin-top: 15px;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      fill: ${pink[200]};
    }
  }
`;
