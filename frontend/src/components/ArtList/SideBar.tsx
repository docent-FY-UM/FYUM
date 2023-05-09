import { SideBarCloseIcStyle } from "./styles";

interface Props {
  info: boolean;
  setInfo: any;
}
const SideBar = ({ info, setInfo }: Props) => {
  const closeSideBar = () => {
    setInfo(false);
  };
  return (
    <>
      <SideBarCloseIcStyle></SideBarCloseIcStyle>
    </>
  );
};
export default SideBar;
