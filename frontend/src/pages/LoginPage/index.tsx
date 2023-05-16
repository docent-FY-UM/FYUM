import {
  BackgroundContainer,
  BackgroundImgStyle,
  LoginContainer,
  LoginTitleFontStyle,
  HrStyle,
  KakaoBtn,
} from "./styles";

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const moveToKakao = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <BackgroundContainer>
      <BackgroundImgStyle />
      <LoginContainer>
        <LoginTitleFontStyle>LOGIN</LoginTitleFontStyle>
        <HrStyle />
        <KakaoBtn onClick={moveToKakao} />
      </LoginContainer>
    </BackgroundContainer>
  );
};
export default LoginPage;
