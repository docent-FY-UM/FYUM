import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { registerActions } from "../../../store/registerSlice";
import useModal from "../../utils/useModal";

import Btn from "../Btn";

import {
  FormContainer,
  InputContainer,
  BrowseFileContainer,
  InputStyle,
  TextAreaStyle,
  InputDiv,
  PreviewImgStyle,
  BtnContainer,
  BtnDiv,
  RealFileBtn,
  NonPreviewImg,
} from "./styles";

interface FormProps {
  type: string;
}

const Form = ({ type }: FormProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [uploadImg, setUploadImg] = useState<string | undefined>();
  const [fileName, setFileName] = useState<string | undefined>();
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

    // 글자 수 제한 검사
    const getBytes = (str: string) => {
      let character;
      let charBytes = 0;

      for (let i = 0; i < str.length; i += 1) {
        character = str.charAt(i);
        if (escape(character).length > 4) charBytes += 2;
        else charBytes += 1;
      }

      return charBytes;
    };

    const titleByte = getBytes(title);
    const contentsByte = getBytes(contents);

    if (titleByte > 255) {
      alert("제목은 255바이트를 초과할 수 없습니다.");
      return;
    }
    if (contentsByte > 255) {
      alert("설명은 255바이트를 초과할 수 없습니다.");
      return;
    }

    // 유효성 검사를 통과한 경우
    if (type === "mydrawing") {
      dispatch(
        registerActions.formRequestStart({
          title,
          contents,
          img,
          type: "mydrawing",
        })
      );
      alert("myDrawings에 저장 완료!");
      closeModal();
      navigate("/my-drawings");
    } else {
      dispatch(
        registerActions.formRequestStart({
          title,
          contents,
          img: uploadImg,
          type: "mypicture",
        })
      );
      alert("사진 업로드 완료!");
      closeModal();
      window.location.reload();
    }
  };

  // 이미지 파일 업로드
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          let [_, base64EncodedUrl] = result.split(",");

          // 10MB 이하의 파일만 업로드 가능함
          const fileSize = file.size;
          let maxSize = 10 * 1024 * 1024;
          console.log("사이즈", fileSize);

          if (fileSize > maxSize) {
            alert("파일의 용량은 10MB 이하로 등록해야합니다.");
            return;
          }

          setUploadImg(base64EncodedUrl);
          setFileName(file.name);
        } else {
          console.error("파일 업로드 실패");
        }
      };
    }
  };

  return (
    <FormContainer>
      <form>
        {type === "exhibitionList" && (
          <InputDiv>
            <p>Attachment</p>
            <BrowseFileContainer>
              <InputStyle
                className="exhibitionList"
                placeholder="작품을 업로드하세요."
                value={fileName}
                readOnly
              />
              <label htmlFor="file-upload">
                <Btn
                  type="attachment"
                  text="Browse files"
                  language="en"
                  width={110}
                  height={31}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("file-upload")?.click();
                  }}
                />
              </label>
              <RealFileBtn
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={(e) => onUpload(e)}
              />
            </BrowseFileContainer>
          </InputDiv>
        )}

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
            <p>Description</p>
            <TextAreaStyle
              name="contents"
              placeholder="작품의 설명을 입력하세요."
              onChange={(e) => {
                onChange(e);
              }}
            />
          </InputDiv>
          {type === "mydrawing" && (
            <PreviewImgStyle
              src={`data:image/jpeg;base64,${img}`}
              alt="이미지 미리보기"
            />
          )}
          {uploadImg && type === "exhibitionList" && (
            <PreviewImgStyle
              className="exhibitionList"
              src={`data:image/jpeg;base64,${uploadImg}`}
              alt="이미지 미리보기"
            />
          )}
          {!uploadImg && type === "exhibitionList" && (
            <NonPreviewImg>
              <span>작품 미리보기</span>
            </NonPreviewImg>
          )}
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
