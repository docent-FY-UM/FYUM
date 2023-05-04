import {
  ListBackgroundContainer,
  ListTitleContainer,
} from "../../styles/listStyles";
import ExhibitionList from "../../components/ExhibitionList";

import BackgroundImg from "../../assets/images/exListBackgroundImg.png";

const ExhibitionListPage = () => {
  return (
    <ListBackgroundContainer backgroundimg={BackgroundImg}>
      <ListTitleContainer>&nbsp;Exhibition List&nbsp;</ListTitleContainer>
      <ExhibitionList />
    </ListBackgroundContainer>
  );
};
export default ExhibitionListPage;
