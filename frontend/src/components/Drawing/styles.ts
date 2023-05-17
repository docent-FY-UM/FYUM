import styled from "styled-components";
import { black, grey } from "../../styles/colors";

import woodImg from "../../assets/images/wood.png";
import { ReactComponent as PaletteIc } from "../../assets/icon/paletteIc.svg";
import { ReactComponent as BrushIc } from "../../assets/icon/brushIc.svg";
import { ReactComponent as PainterIc } from "../../assets/icon/painterIc.svg";
import { ReactComponent as EraserIc } from "../../assets/icon/eraserIc.svg";
import { ReactComponent as ResetIc } from "../../assets/icon/resetIc.svg";

export const WoodContainer = styled.div`
  width: 750px;
  height: 470px;
  position: relative;
  border-radius: 20px;
  background-image: url(${woodImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 3px 15px inset rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    width: 450px;
    height: 520px;
  }

  @media screen and (max-width: 500px) {
    width: 92vw;
    max-width: 380px;
  }
`;

export const CanvasContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Canvas = styled.canvas`
  width: 650px;
  height: 380px;

  background-color: white;
  z-index: 2;
  border: 2px solid ${black};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

export const CanvasColorsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  height: 0px;
  padding-top: 42px;
  width: 600px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    justify-content: space-between;
    width: 400px;
    height: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    justify-content: center;
  }
`;

export const CurrentColor = styled.div<{ color: string }>`
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  border: 2px solid ${black};
  background-color: ${(props) => props.color};
  margin-top: 3px;
  margin-right: -6px;

  @media screen and (max-width: 768px) {
    min-width: 32px;
    min-height: 32px;
    margin-right: 1px;
  }
`;

export const InvisibleColorPicker = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  margin-left: -10px;
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 380px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
    height: 10px;
    padding-top: 35px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

export const CanvasColors = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;

  border-radius: 50%;
  border: 2px solid ${black};
  background-color: ${(props) => props.color};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const BrushIcStyle = styled(BrushIc)`
  min-width: 40px;
  height: 40px;
  cursor: pointer;

  fill: ${grey[700]};

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const PainterIcStyle = styled(PainterIc)`
  min-width: 40px;
  height: 40px;
  cursor: pointer;

  fill: ${grey[700]};

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const PaletteIcStyle = styled(PaletteIc)`
  min-width: 40px;
  height: 40px;
  cursor: pointer;
  margin-top: 6px;

  fill: ${grey[700]};

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const EraserIcStyle = styled(EraserIc)`
  min-width: 40px;
  height: 40px;
  cursor: pointer;

  fill: ${grey[700]};

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const ResetIcStyle = styled(ResetIc)`
  min-width: 40px;
  height: 40px;
  cursor: pointer;

  fill: ${grey[700]};

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const LineWidthStyle = styled.input`
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
