import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AniProps } from "..";
import { userSlice } from "../../../store/userSlice";
import { RootState } from "../../../store";

import {
  BackgroundStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
  MainImgStyle,
} from "../styles";
import { FontStyle, Main1Img1Container, Main1Img2Container } from "./styles";

import main1Img1 from "../../../assets/images/main1Img1.png";
import main1Img2 from "../../../assets/images/main1Img2.png";

const FirstMain = ({ isAnimation, setIsAnimation }: AniProps) => {
  const navigate = useNavigate();
  const { survey } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setIsAnimation(true);
  }, []);

  const handleClickView = () => {
    if (survey) {
      navigate("/recommend");
    } else {
      navigate("/survey");
    }
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp" isanimation={isAnimation.toString()}>
            Get Masterpiece Recommendations
          </FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>

          <Main1Img1Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main1Img1} />
          </Main1Img1Container>

          <FontStyle className="title" isanimation={isAnimation.toString()}>
            Recommendation.
          </FontStyle>

          <Main1Img2Container isanimation={isAnimation.toString()}>
            <MainImgStyle src={main1Img2} />
          </Main1Img2Container>
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default FirstMain;
