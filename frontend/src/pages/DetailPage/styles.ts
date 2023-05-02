import styled from "styled-components";
import { black, white } from "../../styles/colors";
import { ReactComponent as EmptyFrame } from "../../assets/icon/empty_frame.svg";
import { ReactComponent as EmptyBookmark } from "../../assets/icon/empty_bookmark.svg";
import { ReactComponent as FullFrame } from "../../assets/icon/full_frame.svg";
import { ReactComponent as FullBookmark } from "../../assets/icon/full_bookmark.svg";
import { ReactComponent as Speaker } from "../../assets/icon/speaker.svg";

interface BackgroundImgProps {
  src: string;
  description: boolean; // description 프로퍼티 타입 정의
}

export const DetailContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: ${black};
  overflow-x: hidden;
`;

export const BackgroundImg = styled.img<BackgroundImgProps>`
  width: 100vw;
  position: absolute;
  object-fit: fill;
  filter: brightness(
    ${(props) => (props.description === true ? "40%" : "100%")}
  );
  transition: filter 0.5s ease-in-out;

  @media (max-width: 768px) {
    margin-top: 25%;
  }
`;

export const ContentContainer = styled.div`
  position: fixed;
  width: 80%;
  top: 10%;
  left: 14%;
  height: calc(100vh - 60%);

  @media (max-width: 768px) {
    margin-top: 15%;
    width: 80%;
    left: 10%;
    line-height: 2.5vh;
  }
`;

export const TitleOrigin = styled.p<{ len: number }>`
  font-size: ${(props) => (props.len > 30 ? "2.6vw" : "4vw")};
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  color: ${white};
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 5%;
  }
`;

export const TitleKr = styled.p`
  font-size: 1.6vw;
  font-family: "SUIT";
  font-weight: 500;
  color: ${white};
  margin-top: 0;
  margin-bottom: 1%;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 5%;
  }
`;
export const DetailContent = styled.p`
  font-size: 1.1vw;
  font-family: "SUIT";
  color: ${white};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 5%;
  }
`;

export const DetailDiv = styled.div`
  margin-bottom: 3%;
`;

export const ContentDiv = styled.div`
  width: 90%;
  height: 60%;
  overflow-y: auto;
  font-family: "SUIT";

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    height: 180%;
  }
`;

export const Content = styled.p`
  font-size: 1vw;
  font-family: "SUIT";
  font-weight: 100;
  color: ${white};
  line-height: 160%;
  margin: 0;
  padding-right: 1rem;

  @media (max-width: 768px) {
    font-size: 0.5vw;
    line-height: 180%;
  }
`;

export const SpeakerImg = styled(Speaker)`
  width: 3vw;
  fill: ${white};
`;

export const DescriptionBtn = styled.div`
  position: absolute;
  bottom: 1vw;
  left: 2vw;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    left: 7vw;
    bottom: 1.5vh;
  }
`;

export const DescriptionP = styled.p`
  color: ${white};
  font-family: "SUIT";
  font-size: 1.5vw;
  font-weight: 800;
`;

export const MarkContainer = styled.div`
  position: absolute;
  bottom: 3vh;
  right: 2.6vw;

  @media (max-width: 768px) {
    bottom: 0.1vh;
    right: 5vw;
  }
`;

export const EmptyFrameIcStyle = styled(EmptyFrame)`
  width: 2vw;
  fill: ${white};
  margin-right: 1vw;

  @media (max-width: 768px) {
    width: 4vw;
    margin-right: 2vw;
  }
`;

export const FullFrameIcStyle = styled(FullFrame)`
  width: 2vw;
  margin-right: 1vw;

  @media (max-width: 768px) {
    width: 4vw;
    margin-right: 2vw;
  }
`;

export const EmptyBookMarkIcStyle = styled(EmptyBookmark)`
  width: 1.5vw;
  fill: ${white};

  @media (max-width: 768px) {
    width: 3vw;
  }
`;

export const FullBookMarkIcStyle = styled(FullBookmark)`
  width: 1.5vw;

  @media (max-width: 768px) {
    width: 3vw;
  }
`;

export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
