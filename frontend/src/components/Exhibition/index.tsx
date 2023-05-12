import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store";
import { goMyGallery } from "./goMyGallery";
import { getGalleryCodeApi } from "../../store/api";
import {
  ExhibitionContainer,
  MyGalleryContainer,
  MyGalleryEnterStyle,
  MyGalleryImgStyle,
  MyGalleryTextStyle,
  MyGallerySubTextStyle,
  OtherGalleryContainer,
  OtherGalleryEnterStyle,
  OtherGalleryImgStyle,
  SearchInputStyle,
  OtherGalleryTextStyle,
  SearchIcContainer,
  OtherGallerySearchContainer,
} from "./styles";
import useModal from "../utils/useModal";

const Exhibition = () => {
  const [search, setSearch] = useState("");
  const galleryCode = useSelector((state: RootState) => ({
    galleryCode: state.user.id,
    userToken: state.user.accessToken,
  }));
  const { openModal } = useModal();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const isClicked = () => {
    goMyGallery(Number(search), galleryCode.userToken);
  };

  const getIsRoomCode = async (search: string) => {
    const res = await getGalleryCodeApi(search);
    res.data === "error : 닉네임이 없습니다."
      ? openModal({
          type: "noGallery",
          title: "존재하지 않는 갤러리입니다.",
          content: "갤러리 코드를 다시 확인 해 주시기 바랍니다.",
        })
      : openModal({
          type: "yesGallery",
          title: res.data + "님의 갤러리입니다.",
          content: "갤러리로 입장 하시겠습니까?",
          callback: isClicked,
        });
  };
  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getIsRoomCode(search);
      setSearch("");
    }
  };

  const onClickSearchIc = () => {
    getIsRoomCode(search);
    setSearch("");
  };

  return (
    <ExhibitionContainer>
      <MyGalleryContainer>
        <MyGalleryImgStyle />
        <MyGalleryEnterStyle>
          <MyGalleryTextStyle
            onClick={() =>
              goMyGallery(galleryCode.galleryCode, galleryCode.userToken)
            }
          >
            &lt;&lt;&nbsp;&nbsp;Enter My Gallery
          </MyGalleryTextStyle>
          <MyGallerySubTextStyle className="code">
            Gallery Code : {galleryCode.galleryCode}
          </MyGallerySubTextStyle>
        </MyGalleryEnterStyle>
      </MyGalleryContainer>
      <OtherGalleryContainer>
        <OtherGalleryImgStyle></OtherGalleryImgStyle>
        <OtherGalleryEnterStyle>
          <OtherGalleryTextStyle>
            Enter Other Gallery&nbsp;&nbsp;&gt;&gt;
          </OtherGalleryTextStyle>
          <OtherGallerySearchContainer>
            <SearchInputStyle
              placeholder="Input Gallery Code"
              value={search}
              onChange={handleSearchInput}
              onKeyDown={(e) => onCheckEnter(e)}
            />
            <SearchIcContainer onClick={onClickSearchIc}></SearchIcContainer>
          </OtherGallerySearchContainer>
        </OtherGalleryEnterStyle>
      </OtherGalleryContainer>
    </ExhibitionContainer>
  );
};
export default Exhibition;
