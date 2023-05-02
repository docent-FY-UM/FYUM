import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { registerActions } from "../../../store/registerSlice";

import { FormContainer, InputStyle } from "./styles";

const Form = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
//   const { title, contents } = useSelector((state: RootState) => state?.register);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    dispatch(
        registerActions.changeField({
            key: name,
            value,
        })
    )
  };

  return (
    <FormContainer>
      <p>Title</p>
      <InputStyle
        name="title"
        placeholder="작품의 제목을 입력하세요."
        onChange={(e) => {
          onChange(e);
        }}
      />
      <p>contents</p>
      <InputStyle
        className="contents"
        name="contents"
        placeholder="작품의 설명을 입력하세요."
        onChange={(e) => {
            onChange(e);
          }}
      />
    </FormContainer>
  );
};

export default Form;
