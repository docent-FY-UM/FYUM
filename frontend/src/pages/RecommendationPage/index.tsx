import {
  ListBackgroundContainer,
  ListTitleContainer,
} from "../../styles/listStyles";
import { RecommendContainer, TitleContainer, TitleP, TitleHr } from "./styles";
import RecommendList from "../../components/Recommend";
import recommendImg from "../../assets/images/recommendPageImg.png";

const RecommendationPage = () => {
  return (
    <ListBackgroundContainer backgroundimg={recommendImg}>
      <ListTitleContainer>&nbsp;Recommend List&nbsp;</ListTitleContainer>
      <RecommendList />
    </ListBackgroundContainer>
  );
};
export default RecommendationPage;
