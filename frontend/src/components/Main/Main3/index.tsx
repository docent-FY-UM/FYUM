import { useNavigate } from "react-router-dom";

import { AniProps } from "..";

import {
  BackgroundStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
  MainImgStyle,
} from "../styles";
import { Main3Img1Container, Main3Img2Container, FontStyle } from "./styles";

import main3Img1 from "../../../assets/images/main3Img1.png";
import main3Img2 from "../../../assets/images/main3Img2.png";

const ThirdMain = ({ isAnimation }: AniProps) => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/collection");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp" isanimation={isAnimation.toString()}>
            Appreciating masterpieces <br /> by painter/trend/theme
          </FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main3Img1Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main3Img1} />
          </Main3Img1Container>

          <FontStyle className="title" isanimation={isAnimation.toString()}>Collection.</FontStyle>
          <Main3Img2Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main3Img2} />
          </Main3Img2Container>
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default ThirdMain;
