import { useState } from "react";
import { useNavigate } from "react-router";
import {
  IntroDiv,
  IntroVideo,
  TextDiv,
  LogoText,
  IntroText,
  MobileText,
  ClickHere,
  ClickText,
} from "./styles";

const Intro = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <IntroDiv
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      onClick={() => navigate("/login")}
    >
      <IntroVideo
        src={process.env.PUBLIC_URL + "/videos/intro.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <TextDiv>
        <LogoText>FY:UM</LogoText>
        <br></br>
        <IntroText>Online Three-Dimensional Exhibition</IntroText>
      </TextDiv>
      <MobileText> &gt;&gt; &nbsp;Enter</MobileText>
      <ClickHere position={position}>
        <ClickText> &nbsp; &nbsp;click anywhere</ClickText>
      </ClickHere>
    </IntroDiv>
  );
};
export default Intro;
