import styled from "styled-components";

import { ReactComponent as RightArrowIc } from "../../assets/icon/rightArrowIc.svg";
import { white, pink, mainColor } from "../../styles/colors";

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

export const GoExhibitionBtn = styled.div`
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
      color: ${mainColor};
    }
  }
`;

export const ArrowStyle = styled(RightArrowIc)`
  width: 52px;
  height: 13px;
  fill: ${white};
`;