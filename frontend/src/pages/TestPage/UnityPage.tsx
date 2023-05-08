import Unity, { UnityContent } from "react-unity-webgl";
import React, {useCallback, useEffect} from "react"  // 여기 임포트 할 거 있다는거에 주의

export default function UnityApp() {
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
            
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <Unity unityContent={unityContent} />
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br /><button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button>
            <button onClick={clicking}>눌르셈</button><br />
        </div>
    );
}