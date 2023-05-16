import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import Exhibition from "../../components/Exhibition";
import useModal from "../../components/utils/useModal";
import { exhibitionModalActions } from "../../store/exhibitonModalSlice";

const ExhibitionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openModal, closeModal } = useModal();
  const { isFirst } = useSelector((state: RootState) => state.exhibitionModal);

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  const modalContent = {
    type: "default",
    title: "입장 안내",
    content: "PC버전에서만 전시회를 감상할 수 있습니다.",
    callback: goBack,
  };

  useEffect(() => {
    if (isFirst === false) {
      openModal(modalContent);
    }
    dispatch(exhibitionModalActions.closeModal());
    return () => closeModal();
  }, []);

  return (
    <>
      <Exhibition />
    </>
  );
};
export default ExhibitionPage;
