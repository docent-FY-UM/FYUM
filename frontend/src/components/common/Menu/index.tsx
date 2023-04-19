import {
  BackgroundStyle,
  FontStyle,
  InvisibleHeader,
  CloseIcStyle,
  MenuContainer,
} from "./styles";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen === true && (
        <BackgroundStyle>
          <InvisibleHeader>
            <CloseIcStyle onClick={closeMenu} />
          </InvisibleHeader>

          <MenuContainer>
            <FontStyle>나는메뉴!!!</FontStyle>
          </MenuContainer>
        </BackgroundStyle>
      )}
    </>
  );
};

export default Menu;
