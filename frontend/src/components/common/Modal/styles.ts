import styled from "styled-components";
import { grey, mainColor } from "../../../styles/colors";

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
  z-index: 999;
`;

// 작은 모달
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 150px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 9999;

  &.barrier {
    min-height: 150px;
    height: auto;
    justify-content: space-between;
  }
`;

export const ModalTitle = styled.div`
  padding: 1.4rem 1.4rem 1.4rem 1.4rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
`;

export const ModalCourseTitle = styled.div`
  padding: 0.8rem 1.4rem 4.2rem 1.4rem;
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
`;

export const ModalCourseContainer = styled.div`
  width: 380px;
  height: 280px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${grey[100]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${grey[300]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${grey[200]};
  }
`;

export const ModalContents = styled.div`
  padding-left: 1.4rem;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${grey[500]};

  &.barrier {
    padding-right: 1.4rem;
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
