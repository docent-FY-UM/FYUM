import axios from "axios";
import { changeUserNickNm, changeAccessToken } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const KakaoHandle = () => {
  // dispatch/navigate 사용하기 위해 정의
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/survey");
      } else {
        alert("로그인 에러가 발생했습니다. 다시 로그인해주세요!");
        navigate("/login");
      }
    })
    .catch((err) => console.log(err));
  return <div></div>;
};

export default KakaoHandle;
