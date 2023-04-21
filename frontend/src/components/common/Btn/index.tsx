import { BtnStyle, BtnText } from "./style";
interface BtnProps {
  type?: string | undefined;
  text: string;
  language: string;
  width: number | undefined;
  onClick?: (event: React.MouseEvent) => void;
}
const Btn = ({ type, text, language, width, onClick }: BtnProps) => {
  return (
    <BtnStyle className={`Btn_${type}`} width={width}>
      <BtnText className={`Btn_${type}`} language={language}>
        {text}
      </BtnText>
    </BtnStyle>
  );
};
export default Btn;
