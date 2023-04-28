import Btn from "../../components/common/Btn";
import useModal from "../../components/utils/useModal";

const TestPage = () => {
  const { openModal } = useModal();

  return (
    <div style={{ backgroundColor: "grey" }}>
      {/* <div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Btn type="square" text="내 기기에 저장" language="kr" width={400}></Btn>
      <br></br>
      <Btn type="transparent" text="Upload" language="en" width={210}></Btn>
      <br></br>
      <Btn
        type="attachment"
        text="Browse files"
        language="en"
        width={135}
      ></Btn>
      <br></br>
      <Btn type="upload" text="UPLOAD" language="en" width={165}></Btn>
      <button
        onClick={() => {
          openModal({ type: "default", title: "안뇽", content: "안뇨뇨뇽" });
        }}
      >
        모달버튼!
      </button>
    </div>
  );
};

export default TestPage;
