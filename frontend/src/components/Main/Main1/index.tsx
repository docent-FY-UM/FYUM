import { useNavigate } from "react-router-dom";

import {
  BackgroundStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
} from "../styles";
import { Main1Img1Style, Main1Img2Style, FontStyle, Main1Img1Container, Main1Img1Style2 } from "./styles";

import main1Img1 from "../../../assets/images/main1Img1.png";
import main1Img2 from "../../../assets/images/main1Img2.png";

const FirstMain = () => {
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
          {/* <Main1Img1Style src={main1Img1} /> */}
          <Main1Img1Container>
            <Main1Img1Style2 src={main1Img1}/>
          </Main1Img1Container>
          <FontStyle className="title">Recommendation.</FontStyle>
          <Main1Img2Style src={main1Img2} />
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default FirstMain;
