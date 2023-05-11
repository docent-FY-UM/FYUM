import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  SideBarCloseIcStyle,
  SideBarContainer,
  SideBarContentContainer,
  SideBarDimmer,
  SideBarFontStyle,
  SideBarInfoStyle,
  SideBarNameStyle,
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
    <SideBarDimmer>
      <SideBarContainer>
        <SideBarCloseIcStyle onClick={closeSideBar}></SideBarCloseIcStyle>
        <SideBarContentContainer>
          <SideBarNameStyle>
            <SideBarFontStyle className="kr">{nameKr}</SideBarFontStyle>
            {nameEn ? (
              <SideBarFontStyle className="en">{nameEn}</SideBarFontStyle>
            ) : (
              <></>
            )}
          </SideBarNameStyle>
          <SideBarInfoStyle>
            <SideBarFontStyle className="infoString">Info</SideBarFontStyle>
            <SideBarFontStyle className="info">{info}</SideBarFontStyle>
          </SideBarInfoStyle>
        </SideBarContentContainer>
      </SideBarContainer>
    </SideBarDimmer>
  );
};
export default SideBar;
