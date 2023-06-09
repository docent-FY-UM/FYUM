import styled from "styled-components";
import { grey, mainColor } from "../../../styles/colors";

import { ReactComponent as CloseIc } from "../../../assets/icon/closeIc.svg";

// 모달 화면을 어둡게 함
export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

// 모달
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 999999;

  span {
    font-family: "SUIT";
    font-weight: 700;
    font-size: 15px;
  }

  &.barrier {
    min-height: 150px;
    height: auto;
    justify-content: space-between;
  }

  &.mydrawing {
    height: 600px;
  }
`;

export const ModalTitle = styled.div`
  padding: 1.4rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  &.mydrawing {
    padding: 1.2rem 1.4rem 1rem 1.4rem;
    border-bottom: 1px solid ${grey[200]};

    span {
      color: ${grey[500]}
    }
  }
`;

export const ModalContents = styled.div`
  padding-left: 1.4rem;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${grey[500]};

  &.mydrawing {
    padding: 1.4rem 2rem 1.4rem 2rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;

  padding-right: 1.4rem;

  &.barrier {
    padding-bottom: 20px;
  }
`;

export const ModalBtn = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  margin-top: 20px;

  @media (hover: hover) {
    &:hover {
      opacity: 50%;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

export const ModalYesBtn = styled(ModalBtn)`
  color: ${mainColor};
`;

export const CloseBtn = styled(CloseIc)`
  width: 15px;
  height: 15px;
  fill: ${grey[400]};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      fill: ${mainColor};
    }
  }
`;
