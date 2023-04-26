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
import { Main4Img1Container, Main4Img2Container, FontStyle } from "./styles";

import main4Img1 from "../../../assets/images/main4Img1.png";
import main4Img2 from "../../../assets/images/main4Img2.png";

const FourthMain = ({ isAnimation }: AniProps) => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/gallery");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp" isanimation={isAnimation.toString()}>View My Collection</FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main4Img1Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main4Img2} />
          </Main4Img1Container>

          <FontStyle className="title" isanimation={isAnimation.toString()}>My Gallery.</FontStyle>
          <Main4Img2Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main4Img1} />
          </Main4Img2Container>
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default FourthMain;
