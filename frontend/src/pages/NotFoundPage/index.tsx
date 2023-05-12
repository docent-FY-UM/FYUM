import { NotFoundContainer, BackgroundImg, Content } from "./styles";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <BackgroundImg />
      <Content>
        Sorry, <br/>Page Not Found
      </Content>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
