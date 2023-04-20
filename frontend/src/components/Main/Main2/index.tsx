import { BackgroundStyle, FontStyle } from "../styles";
import useModal from "../../utils/useModal";

const SecondMain = () => {
  const { openModal } = useModal();

  return (
    <BackgroundStyle>
      <FontStyle>두번째 메인페이지</FontStyle>

      <button
        onClick={() => {
          openModal({ type: "default", title: "안뇽", content: "안뇨뇨뇽" });
        }}
      >
        모달버튼!
      </button>
    </BackgroundStyle>
  );
};

export default SecondMain;
