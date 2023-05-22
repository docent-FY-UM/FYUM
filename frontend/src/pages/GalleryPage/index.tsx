import { useNavigate } from "react-router-dom";
import {
  BackgroundContainer,
  BackgroundImg,
  BtnMoblieContainer,
  BtnContainer,
} from "./styles";
import Btn from "../../components/common/Btn";

const GalleryPage = () => {
  const navigate = useNavigate();

  const btnContent = [
    {
      className: "exhibition",
      text: "EXHIBITION LIST",
      nav: "exhibitionlist",
    },
    {
      className: "drawing",
      text: "DRAWING",
      nav: "drawing",
    },
    {
      className: "mydrawings",
      text: "MY DRAWINGS",
      nav: "my-drawings",
    },
    {
      className: "wish",
      text: "LIKED LIST",
      nav: "liked-list",
    },
  ];

  const handleClickBtn = (nav: string) => {
    navigate(`/${nav}`);
  };

  return (
    <BackgroundContainer>
      <BtnMoblieContainer>
        {btnContent.map((btn, index) => (
          <BtnContainer
            className={btn.className}
            key={index}
            onClick={() => {
              handleClickBtn(btn.nav);
            }}
          >
            <Btn type="square" text={btn.text} language="en" widthM={250} />
          </BtnContainer>
        ))}
      </BtnMoblieContainer>
      <BackgroundImg />
    </BackgroundContainer>
  );
};
export default GalleryPage;
