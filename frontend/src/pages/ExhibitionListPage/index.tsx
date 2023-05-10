import {
  ListTitleContainer,
} from "../../styles/listStyles";
import { ListContainer } from "../../components/List/styles"; 

import ExhibitionList from "../../components/ExhibitionList";


const ExhibitionListPage = () => {
  return (
    <ListContainer add={"exhibition-list"}>
      <ListTitleContainer>&nbsp;Exhibition List&nbsp;</ListTitleContainer>
      <ExhibitionList />
    </ListContainer>
  );
};
export default ExhibitionListPage;
