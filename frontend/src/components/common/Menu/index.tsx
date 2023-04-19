import { BackgroundStyle, FontStyle } from "./styles";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps) => {
  return (
    <>
      {isMenuOpen === true && (
        <BackgroundStyle>
          <FontStyle>나는메뉴!!!</FontStyle>
        </BackgroundStyle>
      )}
    </>
  );
};

export default Menu;
