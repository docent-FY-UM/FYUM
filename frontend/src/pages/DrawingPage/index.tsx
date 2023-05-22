import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerActions } from "../../store/registerSlice";
import useModal from "../../components/utils/useModal";
import Form from "../../components/common/form";

import { ListTitleContainer } from "../../styles/listStyles";

import {
  BackgroundContainer,
  CanvasBtnContainer,
  BtnContainer,
  RealFileBtn,
  FileBtn,
  FileFontStyle,
} from "./styles";

import DrawingApp from "../../components/Drawing";
import Btn from "../../components/common/Btn";

const DrawingPage = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const [imgFile, setImgFile] = useState<File | undefined>();
  const [getCanvas, setGetCanvas] = useState<HTMLCanvasElement | null>();
  const [isDownloadClick, setIsDownloadClick] = useState(false);
  const [isSaveClick, setIsSaveClick] = useState(false);

  // 이미지 파일 업로드
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImgFile(file);
    }
  };

  // 파일 다운로드
  useEffect(() => {
    if (getCanvas) {
      const url = getCanvas.toDataURL();

      if (isDownloadClick) {
        const downloadImg = document.createElement("a");
        downloadImg.href = url;
        downloadImg.download = "myDrawing.png";
        downloadImg.click();
        setIsDownloadClick(false);
      }

      if (isSaveClick) {
        let [_, base64EncodedUrl] = url.split(",");
        dispatch(registerActions.setMyDrawingImg(base64EncodedUrl));
        openModal({
          type: "mydrawing",
          title: "내 그림 목록에 저장하기",
          content: <Form type="mydrawing"/>,
        });
        setIsSaveClick(false);
      }
    }
  }, [getCanvas, isDownloadClick, isSaveClick]);

  return (
    <>
      <BackgroundContainer>
        <ListTitleContainer>
        &nbsp;Drawing&nbsp;
        </ListTitleContainer>
        <CanvasBtnContainer>
          <DrawingApp imgFile={imgFile} setGetCanvas={setGetCanvas} />
          <BtnContainer>
            <FileBtn htmlFor="file-upload">
              <FileFontStyle>사진 올리기</FileFontStyle>
            </FileBtn>
            <RealFileBtn
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                onFileChange(e);
              }}
            />

            <Btn
              type="square"
              text="내 기기에 저장"
              language="en"
              widthM={250}
              onClick={() => {
                setIsDownloadClick(true);
              }}
            />
            <Btn
              type="square"
              text="My Drawings에 저장"
              language="en"
              widthM={250}
              onClick={() => {
                setIsSaveClick(true);
              }}
            />
          </BtnContainer>
        </CanvasBtnContainer>
      </BackgroundContainer>
    </>
  );
};
export default DrawingPage;
