import useModal from "../../utils/useModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import {
  ModalDimmer,
  ModalContainer,
  ModalTitle,
  ModalContents,
  ModalFooter,
  ModalBtn,
  ModalYesBtn,
} from "./styles";

const Modal = () => {
  const { closeModal } = useModal();

  const { type, isOpen, title, content, callback } = useSelector(
    (state: RootState) => ({
      type: state.modal.type,
      isOpen: state.modal.isOpen,
      title: state.modal.title,
      content: state.modal.content,
      callback: state.modal.callback,
    })
  );

  return (
    <div>
      {isOpen && type === "default" && (
        <ModalDimmer>
          <ModalContainer>
            <ModalTitle>{title}</ModalTitle>
            <ModalContents>{content}</ModalContents>
            <ModalFooter>
              <ModalBtn onClick={closeModal}>취소</ModalBtn>
              <ModalYesBtn onClick={callback}>삭제</ModalYesBtn>
            </ModalFooter>
          </ModalContainer>
        </ModalDimmer>
      )}
    </div>
  );
};

export default Modal;
