import styled from "styled-components";
import { white } from "../../styles/colors";
import recommendImg from "../../assets/images/recommendPageImg.png";

export const RecommendContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-image: url(${recommendImg});
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  width: 30vw;
`;

export const TitleP = styled.p`
  color: ${white};
  font-size: 2.5vw;
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  margin: 0;
`;

export const TitleHr = styled.hr`
  width: 70%;
  margin-top: 0;
`;
