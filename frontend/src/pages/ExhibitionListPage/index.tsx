import { ListBackgroundContainer, ListTitleContainer } from "../../styles/listStyles";

import BackgroundImg from "../../assets/images/exListBackgroundImg.png";

const ExhibitionListPage = () => {
  return (
    <ListBackgroundContainer backgroundimg={BackgroundImg}>
      <ListTitleContainer>&nbsp;Exhibition List&nbsp;</ListTitleContainer>
    </ListBackgroundContainer>
  );
};
export default ExhibitionListPage;
