import Unity, { UnityContent } from "react-unity-webgl";
import React, {useCallback, useEffect} from "react"  // 여기 임포트 할 거 있다는거에 주의

export default function UnityApp() {
    // let unityContent = new UnityContent(
    //     "unity/Build/edittset.json",
    //     "unity/Build/UnityLoader.js"
    // );
    // alert("gogogo");
    // function clicking() {
    //     alert("눌렸음!");
    //     unityContent.send("React", "aaa");
    // }
    return (
        <>
            <button>바뀌긴하나</button>
            {/* <Unity unityContent={unityContent} /> */}
        </>
    );
}