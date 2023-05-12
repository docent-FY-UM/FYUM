import styled from "styled-components";
import { grey, white } from "../../styles/colors";
import leftImg from "../../assets/images/exhibitionLeftNoBackground2.png";
import rightImg from "../../assets/images/exhibitionRightNoBackground.png";
import { ReactComponent as SearchIc } from "../../assets/icon/searchIc.svg";

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const MyGalleryContainer = styled.div`
  background-color: ${grey[800]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: brightness(40%);

  &:hover {
    filter: brightness(100%);
  }
`;

export const MyGalleryImgStyle = styled.img.attrs({
  src: `${leftImg}`,
})`
  height: 60%;
  width: 70%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 17%;
`;

export const MyGalleryEnterStyle = styled.div``;

export const MyGalleryTextStyle = styled.div`
  position: absolute;
  color: ${white};
  bottom: 10%;
  right: 5%;
  font-weight: 700;
  font-size: 3.5vw;
  cursor: pointer;

  &.code {
    bottom: 3%;
    font-size: 2.8vw;
    cursor: auto;
  }
`;

export const MyGallerySubTextStyle = styled.div`
  position: absolute;
  color: ${white};
  bottom: 10%;
  right: 5%;
  font-weight: 700;
  font-size: 3.5vw;
  cursor: pointer;

  &.code {
    bottom: 3.5%;
    font-size: 2vw;
    cursor: auto;
  }
`;

export const OtherGalleryContainer = styled.div`
  background-color: ${grey[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: brightness(40%);
  &:hover {
    filter: brightness(100%);
  }
`;

export const OtherGalleryImgStyle = styled.img.attrs({
  src: `${rightImg}`,
})`
  height: 60%;
  width: 70%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 17%;
`;

export const OtherGalleryEnterStyle = styled.label``;

export const OtherGalleryTextStyle = styled.div`
  position: absolute;
  color: ${white};
  bottom: 10%;
  left: 5%;
  font-weight: 700;
  font-size: 3.5vw;
`;

export const OtherGallerySearchContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const SearchInputStyle = styled.input`
  position: absolute;
  bottom: 3.8%;
  left: 5%;
  border: 2px solid #959595;
  height: 4%;
  width: 30%;
  border-radius: 15px;
  font-size: 1vw;
  padding-left: 10px;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const SearchIcContainer = styled(SearchIc)`
  position: absolute;
  bottom: 5.1%;
  left: 33%;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 29%;
    bottom: 5.5%;
    width: 10px;
    height: 10px;
  }
`;
