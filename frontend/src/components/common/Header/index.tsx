import { useEffect, useState } from "react";

import Menu from "../Menu";

import { HeaderContainer, LogoIcStyle, MenuIcStyle } from "./styles";

const Header = () => {
  let currentUrl = window.location.pathname;

  const [headerColor, setHeaderColor] = useState("transparent");
  const [iconColor, setIconColor] = useState("white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (currentUrl.includes("/main")) {
      setHeaderColor("black");
    } else if (currentUrl.includes("/artlist")) {
      setIconColor("black");
    }
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    console.log("메뉴 열림?", isMenuOpen);
  };

  return (
    <>
      <HeaderContainer headercolor={headerColor}>
        <LogoIcStyle iconcolor={iconColor} />
        <MenuIcStyle iconcolor={iconColor} onClick={openMenu} />
      </HeaderContainer>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
