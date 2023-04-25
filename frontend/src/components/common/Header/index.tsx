import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../Menu";

import {
  HeaderContainer,
  InvisibleBox,
  LogoIcStyle,
  MenuIcStyle,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();
  let currentUrl = window.location.pathname;

  const [headerColor, setHeaderColor] = useState("transparent");
  const [iconColor, setIconColor] = useState("white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (currentUrl.includes("/main")) {
      setHeaderColor("black");
    } else if (currentUrl.includes("/artlist")) {
      setIconColor("black");
    } else {
      setHeaderColor("white");
      setIconColor("white");
    }
  }, [currentUrl]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const HandleLogoClick = () => {
    navigate("/main");
  };

  return (
    <>
      <HeaderContainer headercolor={headerColor}>
        {currentUrl === "/main" && <InvisibleBox />}
        <LogoIcStyle iconcolor={iconColor} onClick={HandleLogoClick} />
        <MenuIcStyle iconcolor={iconColor} onClick={openMenu} />
      </HeaderContainer>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
