import { SideBarCloseIcStyle, SideBarContainer } from "./styles";

interface Props {
  info: boolean;
  setInfo: any;
}
const SideBar = ({ info, setInfo }: Props) => {
  const closeSideBar = () => {
    setInfo(false);
  };
  return (
    <SideBarContainer>
      <SideBarCloseIcStyle onClick={() => closeSideBar()}></SideBarCloseIcStyle>
    </SideBarContainer>
  );
};
export default SideBar;
