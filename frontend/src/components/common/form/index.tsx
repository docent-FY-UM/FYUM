import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { registerActions } from "../../../store/registerSlice";

import Btn from "../Btn";

import {
  FormContainer,
  InputContainer,
  InputStyle,
  InputDiv,
  PreviewImgStyle,
  BtnContainer,
  BtnDiv,
} from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const { title, contents, img } = useSelector(
    (state: RootState) => state.register
  );

  // 이미지 미리보기
  // const previewImg = new Image();
  // previewImg.src = img;

  // 1. input 변경 이벤트 핸들러
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log("제출버튼");

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
            <InputStyle
              className="contents"
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
