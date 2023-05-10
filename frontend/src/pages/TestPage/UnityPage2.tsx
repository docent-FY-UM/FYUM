import Unity, { UnityContent } from "react-unity-webgl";

export default function UnityPage2() {
  let unityContent = new UnityContent(
    "unity/Build/edittset.json",
    "unity/Build/UnityLoader.js"
  );
  function clicking() {
    alert("눌렸음!");
  }
  return (  
  <>
    <button onClick={clicking} style={{height:'500px', width:'500px'}}>눌르셈</button><br/>
    <Unity unityContent={unityContent} />
  </>
  );
}

