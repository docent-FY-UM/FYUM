import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { sideBarActions } from "../../store/sideBarSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const { nameKr, nameEn, info, isOpen } = useSelector((state: RootState) => ({
    nameKr: state.sideBar.nameKr,
    nameEn: state.sideBar.nameEn,
    info: state.sideBar.info,
    isOpen: state.sideBar.isOpen,
  }));

  const closeSideBar = () => {
    setOnOff(false);
    dispatch(sideBarActions.closeSideBar());
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
