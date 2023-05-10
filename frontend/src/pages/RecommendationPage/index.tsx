import {
  ListTitleContainer,
} from "../../styles/listStyles";
import { ListContainer } from "../../components/List/styles";

import RecommendList from "../../components/Recommend";

const RecommendationPage = () => {
  return (
    <ListContainer add={"rec"}>
      <ListTitleContainer>&nbsp;Recommend List&nbsp;</ListTitleContainer>
      <RecommendList />
    </ListContainer>
  );
};
export default RecommendationPage;
