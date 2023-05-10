import useModal from "../../utils/useModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { registerActions } from "../../../store/registerSlice";

import {
  ModalDimmer,
  ModalContainer,
  ModalTitle,
  ModalContents,
  ModalFooter,
  ModalBtn,
  ModalYesBtn,
  CloseBtn,
} from "./styles";

const Modal = () => {
  const dispatch = useDispatch();
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

  const onClickClose = () => {
    dispatch(registerActions.reset());
    closeModal();
  };

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

      {isOpen && (type === "mydrawing" || type === "upload") && (
        <ModalDimmer>
          <ModalContainer className="mydrawing">
            <ModalTitle className="mydrawing">
              <span>{title}</span>
              <CloseBtn
                onClick={() => {
                  onClickClose();
                }}
              />
            </ModalTitle>
            <ModalContents className="mydrawing">
              <span>{content}</span>
            </ModalContents>
          </ModalContainer>
        </ModalDimmer>
      )}
    </div>
  );
};

export default Modal;
