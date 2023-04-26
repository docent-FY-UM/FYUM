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
import { Main2Img1Container, Main2Img2Container, FontStyle } from "./styles";

import main2Img1 from "../../../assets/images/main2Img1.png";
import main2Img2 from "../../../assets/images/main2Img2.png";

const SecondMain = ({ isAnimation }: AniProps) => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/exhibition");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp" isanimation={isAnimation.toString()}>
            3D Three-Dimensional Exhibition
          </FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main2Img1Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main2Img1} />
          </Main2Img1Container>

          <FontStyle className="title" isanimation={isAnimation.toString()}>
            3D Exhibition.
          </FontStyle>

          <Main2Img2Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main2Img2} />
          </Main2Img2Container>
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default SecondMain;
