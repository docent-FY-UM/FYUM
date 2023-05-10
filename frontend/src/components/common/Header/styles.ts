import styled from "styled-components";
import { pink } from "../../../styles/colors";

import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as MenuIc } from "../../../assets/icon/menuIc.svg";

export const HeaderContainer = styled.div<{ headercolor: string }>`
  width: 100%;
  height: 80px;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 99998;

  @media (max-width: 768px) {
    background-color: ${(props) => props.headercolor};
  }
`;

export const InvisibleBox = styled.div`
  @media (max-width: 768px) {
    height: 80px;
    visibility: hidden;
  }
`;

export const LogoIcStyle = styled(LogoIc)<{ iconcolor: string }>`
  width: 60px;
  height: 60px;
  margin-left: 30px;
  margin-top: 10px;
  fill: ${(props) => props.iconcolor};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      fill: ${pink[200]};
    }
  }
`;

export const MenuIcStyle = styled(MenuIc)<{ iconcolor: string }>`
  width: 30px;
  height: 40px;
  margin-right: 40px;
  margin-top: 15px;
  stroke: ${(props) => props.iconcolor};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      stroke: ${pink[200]};
    }
  }
`;
