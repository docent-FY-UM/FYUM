import {
  ListTitleContainer,
} from "../../styles/listStyles";
import { ListContainer } from "../../components/List/styles"; 

import MyDrawings from "../../components/MyDrawings";

const MyDrawingsPage = () => {
  return (
    <ListContainer add={"mydrawing"}>
      <ListTitleContainer>&nbsp;My Drawings&nbsp;</ListTitleContainer>
      <MyDrawings />
    </ListContainer>
  );
};

export default MyDrawingsPage;
