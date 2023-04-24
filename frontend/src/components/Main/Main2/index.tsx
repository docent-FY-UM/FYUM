import { useNavigate } from "react-router-dom";

import {
  BackgroundStyle,
  FontStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
} from "../styles";
import { Main2Img1, Main2Img2 } from "./styles";

import main2Img1 from "../../../assets/images/main2Img1.png";
import main2Img2 from "../../../assets/images/main2Img2.png";

const SecondMain = () => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/recommend");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp">Get Masterpiece Recommendations</FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main2Img1 src={main2Img1} />
          <FontStyle className="title">Recommendation.</FontStyle>
          <Main2Img2 src={main2Img2} />
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default SecondMain;
