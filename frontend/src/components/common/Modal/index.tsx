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
            <ModalTitle>
              <span>{title}</span>
            </ModalTitle>
            <ModalContents>
              <span>{content}</span>
            </ModalContents>
            <ModalFooter>
              <ModalBtn onClick={closeModal}>
                <span>취소</span>
              </ModalBtn>
              <ModalYesBtn onClick={callback}>
                <span>확인</span>
              </ModalYesBtn>
            </ModalFooter>
          </ModalContainer>
        </ModalDimmer>
      )}

      {isOpen && type === "mydrawing" && (
        <ModalDimmer>
          <ModalContainer className="mydrawing">
            <ModalTitle className="mydrawing"><span>{title}</span></ModalTitle>
      
          </ModalContainer>
        </ModalDimmer>
      )}
    </div>
  );
};

export default Modal;
