import { BtnStyle, BtnText } from "./styles";
interface BtnProps {
  type?: string | undefined;
  text: string;
  language: string;
  width?: number | undefined;
  widthM?: number | undefined; // 반응형 넓이
  onClick?: (event: React.MouseEvent) => void;
}
const Btn = ({ type, text, language, width, widthM, onClick }: BtnProps) => {
  return (
    <BtnStyle className={`Btn_${type}`} width={width} widthM={widthM} onClick={onClick}>
      <BtnText className={`Btn_${type}`} language={language}>
        {text}
      </BtnText>
    </BtnStyle>
  );
};
export default Btn;
