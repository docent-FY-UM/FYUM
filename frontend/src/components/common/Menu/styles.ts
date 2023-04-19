import styled from "styled-components";
import { black, white, grey, pink } from "../../../styles/colors";

import { ReactComponent as CloseIc } from "../../../assets/icon/closeIc.svg";

export const BackgroundStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${black};
  position: fixed;
  z-index: 9999;
`;

export const InvisibleHeader = styled.div`
  height: 80px;
  background-color: transparent;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
`;

export const FontStyle = styled.div`
  color: ${white};
`;

export const CloseIcStyle = styled(CloseIc)`
  height: 30px;
  width: 30px;
  fill: ${white};
  margin-right: 30px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    fill: ${pink[200]};
  }
`;
