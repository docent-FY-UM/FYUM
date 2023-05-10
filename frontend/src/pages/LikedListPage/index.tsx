import {
  ListTitleContainer,
} from "../../styles/listStyles";
import { ListContainer } from "../../components/List/styles"; 

import LikedList from "../../components/Liked";

const LikedListPage = () => {
  return (
    <ListContainer add={"like"}>
      <ListTitleContainer>&nbsp;Liked List&nbsp;</ListTitleContainer>
      <LikedList />
    </ListContainer>
  );
};
export default LikedListPage;
