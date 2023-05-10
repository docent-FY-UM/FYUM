import {
  ListBackgroundContainer,
  ListTitleContainer,
} from "../../styles/listStyles";
import LikedList from "../../components/Liked";
import likedImg from "../../assets/images/likedPageImg.png";

const LikedListPage = () => {
  return (
    <ListBackgroundContainer backgroundimg={likedImg}>
      <ListTitleContainer>&nbsp;Liked List&nbsp;</ListTitleContainer>
      <LikedList />
    </ListBackgroundContainer>
  );
};
export default LikedListPage;
