import styled from "styled-components";
import BackImg from "../../assets/images/artListBackground.png";
import { ReactComponent as CloseIc } from "../../assets/icon/closeIc.svg";
import { grey } from "../../styles/colors";

export const ArtListContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackImg});
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -3%;
    height: 103%;
  }
`;

export const SideBarCloseIcStyle = styled(CloseIc)`
  height: 20px;
  width: 20px;
  fill: ${grey[300]};
`;
