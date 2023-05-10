import axios from "axios";
import {
  changeUserNickNm,
  changeAccessToken,
  changeSurvey,
  changeId,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";

const KakaoHandle = () => {
  // dispatch/navigate 사용하기 위해 정의
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  axios
    .get(baseURL + `/api/members/oauth/token?code=${code}`)
    .then((res) => {
      if (res.status === 200) {
        // 로컬스토리지에 토큰 저장
        localStorage.setItem("token", res.headers.authorization);
        dispatch(changeUserNickNm(res.data.nickname));
        dispatch(changeAccessToken(res.headers.authorization));
        dispatch(changeSurvey(res.data.survey));
        dispatch(changeId(res.data.id));
        {
          res.data.survey === true
            ? (window.location.href = "/main")
            : (window.location.href = "/survey");
        }
      } else {
        alert("로그인 에러가 발생했습니다. 다시 로그인해주세요!");
        window.location.href = "/login";
      }
    })
    .catch((err) => console.log(err));
  return <div></div>;
};

export default KakaoHandle;
