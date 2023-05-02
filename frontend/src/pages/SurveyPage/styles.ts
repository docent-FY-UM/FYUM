import styled from "styled-components";
import { black, white } from "../../styles/colors";

interface artworkImgInfo {
  choosed: boolean;
}
export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${black};
  position: relative;
`;

export const SurveyContainer = styled.div`
  position: absolute;
  top: 18vh;
  left: 5vw;
  width: 80vw;
  height: 70vh;
  background-color: ${black};

  @media (max-width: 768px) {
    top: 12vh;
  }
`;

export const SurveyTitle = styled.p`
  color: ${white};
  font-size: 2vw;

  @media (max-width: 768px) {
    margin-top: 2vh;
    margin-bottom: 3vh;
    margin-left: 3vw;
    font-size: 5vw;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 150% 150%;
  gap: 2vw;
  width: 110%;
  height: 20%;

  @media (max-width: 768px) {
    grid-template-columns: 100% 100%;
    grid-template-rows: 90% 90% 90% 90% 90%;
    gap: 10%;
    width: 50%;
    margin-left: 3vw;
  }
`;

export const ArtworkImg = styled.img<artworkImgInfo>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 2vh;
  filter: ${(props) =>
    props.choosed ? "brightness(100%)" : "brightness(40%)"};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      filter: brightness(100%);
    }
  }

  @media (hover: none) {
    &:active {
      filter: brightness(100%);
    }
  }
`;