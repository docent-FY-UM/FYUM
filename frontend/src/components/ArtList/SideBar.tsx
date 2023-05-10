import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  SideBarCloseIcStyle,
  SideBarContainer,
  SideBarFontStyle,
} from "./styles";

interface Props {
  onOff: boolean;
  setOnOff: any;
}
const SideBar = ({ onOff, setOnOff }: Props) => {
  const { nameKr, nameEn, info } = useSelector((state: RootState) => ({
    nameKr: state.sideBar.nameKr,
    nameEn: state.sideBar.nameEn,
    info: state.sideBar.info,
  }));
  const closeSideBar = () => {
    setOnOff(false);
  };
  console.log(nameKr, nameEn, info);
  return (
    <SideBarContainer>
      <SideBarCloseIcStyle onClick={() => closeSideBar()}></SideBarCloseIcStyle>
      <SideBarFontStyle className="kr">{nameKr}</SideBarFontStyle>
      <SideBarFontStyle className="en">{nameEn}</SideBarFontStyle>
      <SideBarFontStyle className="info">{info}</SideBarFontStyle>
    </SideBarContainer>
  );
};
export default SideBar;
