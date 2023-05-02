import { useState, useEffect } from "react";

import {
  BackgroundContainer,
  GridItems,
  TitleContainer,
  Underline,
  CanvasBtnContainer,
  BtnContainer,
  RealFileBtn,
  FileBtn,
  FileFontStyle,
} from "./styles";

import DrawingApp from "../../components/Drawing";
import Btn from "../../components/common/Btn";

const DrawingPage = () => {
  const [imgFile, setImgFile] = useState<File | undefined>();
  const [getCanvas, setGetCanvas] = useState<HTMLCanvasElement | null>();
  const [isDownloadClick, setIsDownloadClick] = useState(false);

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
        console.log(url)
        downloadImg.download = "myDrawing.png";
        downloadImg.click();
      }
    }
  }, [getCanvas, isDownloadClick]);



  return (
    <>
      <BackgroundContainer>
        <TitleContainer>
          Drawing
          <Underline />
        </TitleContainer>
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
              onClick={()=>{setIsDownloadClick(true)}}
            />
            <Btn
              type="square"
              text="My Drawings에 저장"
              language="en"
              widthM={250}
            />
          </BtnContainer>
        </CanvasBtnContainer>
      </BackgroundContainer>
    </>
  );
};
export default DrawingPage;
