import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { registerActions } from "../../../store/registerSlice";
import useModal from "../../utils/useModal";

import Btn from "../Btn";

import {
  FormContainer,
  InputContainer,
  InputStyle,
  TextAreaStyle,
  InputDiv,
  PreviewImgStyle,
  BtnContainer,
  BtnDiv,
} from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { title, contents, img } = useSelector(
    (state: RootState) => state.register
  );

  // 1. input 변경 이벤트 핸들러
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    dispatch(
      registerActions.changeField({
        key: name,
        value,
      })
    );
  };

  // 2. form 등록 이벤트 핸들러
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 공백 검사
    let blank_pattern = /^\s+|\s+$/g;
    if (title.replace(blank_pattern, "") === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (contents.replace(blank_pattern, "") === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    dispatch(registerActions.formRequestStart({ title, contents, img }));
    alert("myDrawings에 저장 완료!");
    closeModal();
  };

  return (
    <FormContainer>
      <form>
        <InputContainer>
          <InputDiv>
            <p>Title</p>
            <InputStyle
              name="title"
              placeholder="작품의 제목을 입력하세요."
              onChange={(e) => {
                onChange(e);
              }}
            />
          </InputDiv>
          <InputDiv>
            <p>Contents</p>
            <TextAreaStyle
              name="contents"
              placeholder="작품의 설명을 입력하세요."
              onChange={(e) => {
                onChange(e);
              }}
            />
          </InputDiv>
          <PreviewImgStyle
            src={`data:image/jpeg;base64,${img}`}
            alt="이미지 미리보기"
          />
          <BtnContainer>
            <BtnDiv>
              <Btn
                type="attachment"
                text="UPLOAD"
                language="en"
                width={100}
                onClick={onSubmit}
              />
            </BtnDiv>
          </BtnContainer>
        </InputContainer>
      </form>
    </FormContainer>
  );
};

export default Form;
