import styled from "styled-components";
import { grey, pink } from "../../styles/colors";

import { ReactComponent as DeleteIc } from "../../assets/icon/deleteIc.svg";

export const DeleteIcStyle = styled(DeleteIc)`
  fill: ${grey[100]};
  width: 2vw;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      fill: ${pink[200]};
    }
  }

  @media (max-width: 768px) {
    width: 4vw;
  }
`;
