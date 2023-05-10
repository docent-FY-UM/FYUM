import {
  ListBackgroundContainer,
  ListTitleContainer,
} from "../../styles/listStyles";

import backgroundImg from "../../assets/images/myDrawingsBackgroundImg.png";
import MyDrawings from "../../components/MyDrawings";

const MyDrawingsPage = () => {
  return (
    <ListBackgroundContainer backgroundimg={backgroundImg}>
      <ListTitleContainer>&nbsp;My Drawings&nbsp;</ListTitleContainer>
      <MyDrawings />
    </ListBackgroundContainer>
  );
};

export default MyDrawingsPage;
