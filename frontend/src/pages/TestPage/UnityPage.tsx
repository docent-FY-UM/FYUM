import Unity, { UnityContent } from "react-unity-webgl";
import React, {useCallback, useEffect} from "react"  // 여기 임포트 할 거 있다는거에 주의

export default function App() {
    let unityContent = new UnityContent(
        "unity/Build/edittset.json",
        "unity/Build/UnityLoader.js"
    );
    function clicking() {
        alert("눌렸음!");
        unityContent.send("React", "aaa");
    }
    return (
        <div>
            <Unity unityContent={unityContent} />
            <button onClick={clicking}>눌르셈</button>
        </div>
    );
}