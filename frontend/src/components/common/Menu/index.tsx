import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUserNickNm, changeAccessToken } from "../../../store/userSlice";
import { RootState } from "../../../store";

import {
  BackgroundStyle,
  InvisibleHeader,
  CloseIcStyle,
  MenuGridContainer,
  MenuGridItems,
  SelectedImgStyle,
  PreviousImgStyle,
  MenuListContainer,
  MenuListFontStyle,
} from "./styles";

import menuImg1 from "../../../assets/images/menuImg1.png";
import menuImg2 from "../../../assets/images/menuImg2.png";
import menuImg3 from "../../../assets/images/menuImg3.png";
import menuImg4 from "../../../assets/images/menuImg4.png";
import menuImg5 from "../../../assets/images/menuImg5.png";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedImg, setSelectedImg] = useState(menuImg1);
  const [previousImg, setPreviousImg] = useState(menuImg5);
  const [selectedImgAngle, setSelectedImgAngle] = useState("-3deg");
  const [previousImgAngle, setPreviousImgAngle] = useState("3deg");

  const { survey } = useSelector((state: RootState) => state.user);

  const handleHoverEvent = (img: any) => {
    if (selectedImg !== img) {
      setPreviousImg(selectedImg);
      setPreviousImgAngle(selectedImgAngle);
      setSelectedImg(img);
      setSelectedImgAngle(previousImgAngle);
    }
  };

  const handleClickEvent = (loc: string) => {
    setIsMenuOpen(false);
    if (loc !== "recommend" || (loc === "recommend" && survey)) {
      navigate(`/${loc}`);
    } else {
      navigate("/survey");
    }
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다 :)");
    navigate("/");
    dispatch(changeAccessToken(""));
    dispatch(changeUserNickNm(""));
  };

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

          <MenuGridContainer>
            <MenuGridItems>
              <SelectedImgStyle src={selectedImg} angle={selectedImgAngle} />

              <PreviousImgStyle src={previousImg} angle={previousImgAngle} />
              <MenuListContainer>
                <MenuListFontStyle>
                  <p
                    onMouseEnter={() => handleHoverEvent(menuImg1)}
                    onClick={() => handleClickEvent("recommend")}
                  >
                    Recommendation.
                  </p>
                  <p
                    onMouseEnter={() => handleHoverEvent(menuImg2)}
                    onClick={() => handleClickEvent("exhibition")}
                  >
                    3D Exhibition.
                  </p>
                  <p
                    onMouseEnter={() => handleHoverEvent(menuImg3)}
                    onClick={() => handleClickEvent("collection")}
                  >
                    Collection.
                  </p>
                  <p
                    onMouseEnter={() => handleHoverEvent(menuImg4)}
                    onClick={() => handleClickEvent("gallery")}
                  >
                    Gallery.
                  </p>
                  <p
                    onMouseEnter={() => handleHoverEvent(menuImg5)}
                    onClick={handleLogout}
                  >
                    Logout.
                  </p>
                </MenuListFontStyle>
              </MenuListContainer>
            </MenuGridItems>
          </MenuGridContainer>
        </BackgroundStyle>
      )}
    </>
  );
};

export default Menu;
