import { useRef, useEffect, useState } from "react";
import {
  FirstMain,
  SecondMain,
  ThirdMain,
  FourthMain,
} from "../../components/Main/index";

import { RefContainer } from "./styles";

const MainPage = () => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const plusHeight = 5; // 오차범위
  const [isAnimation, setIsAnimation] = useState(false);
  const [secondAni, setSecondAni] = useState(false);
  const [thirdAni, setThirdAni] = useState(false);
  const [fourthAni, setFourthAni] = useState(false);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      if (outerDivRef.current) {
        const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
        const pageHeight = window.innerHeight; // 화면 세로길이

        if (deltaY > 0) {
          // 스크롤 내릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            // 현재 1페이지
            outerDivRef.current.scrollTo({
              top: pageHeight + plusHeight,
              behavior: "smooth",
            });
            setSecondAni(true);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            // 현재 2페이지
            outerDivRef.current.scrollTo({
              top: pageHeight * 2 + plusHeight,
              behavior: "smooth",
            });
            setThirdAni(true);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
            // 현재 3페이지
            outerDivRef.current.scrollTo({
              top: pageHeight * 3 + plusHeight * 2,
              behavior: "smooth",
            });
            setFourthAni(true);
          }
        } else {
          // 스크롤 올릴 때
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            //현재 2페이지
            outerDivRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 3페이지
            outerDivRef.current.scrollTo({
              top: pageHeight - plusHeight,
              behavior: "smooth",
            });
          } else if (
            scrollTop >= pageHeight &&
            scrollTop < pageHeight * 3 + plusHeight * 2
          ) {
            //현재 4페이지
            outerDivRef.current.scrollTo({
              top: pageHeight * 2 - plusHeight * 3,
              behavior: "smooth",
            });
          }
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <RefContainer ref={outerDivRef}>
      <FirstMain isAnimation={isAnimation} setIsAnimation={setIsAnimation} />
      <SecondMain isAnimation={secondAni} setIsAnimation={setSecondAni} />
      <ThirdMain isAnimation={thirdAni} setIsAnimation={setThirdAni} />
      <FourthMain isAnimation={fourthAni} setIsAnimation={setFourthAni} />
    </RefContainer>
  );
};
export default MainPage;
