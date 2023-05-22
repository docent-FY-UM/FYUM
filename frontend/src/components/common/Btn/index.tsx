import { BtnStyle, BtnText } from "./styles";
interface BtnProps {
  type?: string | undefined;
  text: string;
  language: string;
  width?: number | undefined;
  widthM?: number | undefined; // 반응형 넓이
  height?: number | undefined;
  onClick?: (event: any) => void;
}
const Btn = ({ type, text, language, width, widthM, height, onClick }: BtnProps) => {
  return (
    <BtnStyle className={`Btn_${type}`} width={width} widthM={widthM} height={height} onClick={onClick}>
      <BtnText className={`Btn_${type}`} language={language} height={height}>
        {text}
      </BtnText>
    </BtnStyle>
  );
};
export default Btn;
