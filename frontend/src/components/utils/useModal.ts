import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ModalActions } from "../../store/modalSlice";

interface OpenModalType {
  type: string;
  title?: string;
  content: JSX.Element | string;
  callback?: () => any;
}

const useModal = () => {
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(ModalActions.closeModal());
  }, [dispatch]);

  const openModal = useCallback(
    ({ type, title = "", content, callback }: OpenModalType) => {
      dispatch(ModalActions.openModal({ type, title, content, callback }));
    },
    [dispatch]
  );

  return { closeModal, openModal };
};

export default useModal;
