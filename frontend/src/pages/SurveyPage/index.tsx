import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { surveySubmitApi } from "../../store/api";
import { changeSurvey } from "../../store/userSlice";
import {
  BackgroundContainer,
  SurveyContainer,
  SurveyTitle,
  GridContainer,
  ArtworkImg,
  NextContainer,
  NextText,
  RightArrowIcStyle,
} from "./styles";
import art_1 from "../../assets/images/survey/1.jpg";
import art_2 from "../../assets/images/survey/2.jpg";
import art_3 from "../../assets/images/survey/3.jpg";
import art_20 from "../../assets/images/survey/20.jpg";
import art_53 from "../../assets/images/survey/53.jpg";
import art_54 from "../../assets/images/survey/54.jpg";
import art_147 from "../../assets/images/survey/147.jpg";
import art_174 from "../../assets/images/survey/174.jpg";
import art_225 from "../../assets/images/survey/225.jpg";
import art_238 from "../../assets/images/survey/238.jpg";

const SurveyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [choosed, setChoosed] = useState<number[]>([]);

  const handleClick = (artworkNum: number) => {
    if (choosed.length < 2) {
      if (choosed.includes(artworkNum)) {
        setChoosed(choosed.filter((num) => num !== artworkNum));
      } else {
        setChoosed([...choosed, artworkNum]);
      }
    } else if (choosed.length === 2) {
      if (choosed.includes(artworkNum)) {
        setChoosed(choosed.filter((num) => num !== artworkNum));
      } else {
        alert("2개의 그림만 선택해주세요");
      }
    } else if (choosed.length > 2) {
      alert("2개의 그림만 선택해주세요");
    }
  };

  const sendSurveyData = async () => {
    try {
      await surveySubmitApi(choosed);
      dispatch(changeSurvey(true));
    } catch (err) {
      console.log(err);
    }
  };

  const sendSurvey = () => {
    navigate("/recommend");
    sendSurveyData();
  };

  console.log(choosed);
  return (
    <BackgroundContainer>
      <SurveyContainer>
        <SurveyTitle>
          choose 2 artworks to find out your preferences
        </SurveyTitle>
        <GridContainer>
          <ArtworkImg
            src={art_1}
            onClick={() => handleClick(1)}
            choosed={choosed.includes(1)}
          />
          <ArtworkImg
            src={art_2}
            onClick={() => handleClick(2)}
            choosed={choosed.includes(2)}
          />
          <ArtworkImg
            src={art_3}
            onClick={() => handleClick(3)}
            choosed={choosed.includes(3)}
          />
          <ArtworkImg
            src={art_20}
            onClick={() => handleClick(20)}
            choosed={choosed.includes(20)}
          />
          <ArtworkImg
            src={art_53}
            onClick={() => handleClick(53)}
            choosed={choosed.includes(53)}
          />
          <ArtworkImg
            src={art_54}
            onClick={() => handleClick(54)}
            choosed={choosed.includes(54)}
          />
          <ArtworkImg
            src={art_147}
            onClick={() => handleClick(147)}
            choosed={choosed.includes(147)}
          />
          <ArtworkImg
            src={art_174}
            onClick={() => handleClick(174)}
            choosed={choosed.includes(174)}
          />
          <ArtworkImg
            src={art_225}
            onClick={() => handleClick(225)}
            choosed={choosed.includes(225)}
          />
          <ArtworkImg
            src={art_238}
            onClick={() => handleClick(238)}
            choosed={choosed.includes(238)}
          />
        </GridContainer>
        <NextContainer onClick={sendSurvey}>
          <NextText>Submit&nbsp;&nbsp;</NextText>
          <RightArrowIcStyle />
        </NextContainer>
      </SurveyContainer>
    </BackgroundContainer>
  );
};

export default SurveyPage;
