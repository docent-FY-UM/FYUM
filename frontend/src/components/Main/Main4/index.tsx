import { useNavigate } from "react-router-dom";

import {
  BackgroundStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
} from "../styles";
import { Main2Img1Style, Main2Img2Style, FontStyle } from "./styles";

import main4Img1 from "../../../assets/images/main4Img1.png";
import main4Img2 from "../../../assets/images/main4Img2.png";

const FourthMain = () => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/gallery");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp">View My Collection</FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main2Img1Style src={main4Img2} />
          <FontStyle className="title">My Gallery.</FontStyle>
          <Main2Img2Style src={main4Img1} />
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default FourthMain;
