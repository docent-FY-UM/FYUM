import { useState, useEffect } from "react";
import { getDetailApi } from "../../store/api";
import {
  DetailContainer,
  BackgroundImg,
  ContentContainer,
  TitleOrigin,
  TitleKr,
  Content,
  DetailContent,
  ContentDiv,
  DetailDiv,
  SpeakerImg,
  DescriptionBtn,
  DescriptionP,
  MarkContainer,
  EmptyFrameIcStyle,
  FullFrameIcStyle,
  EmptyBookMarkIcStyle,
  FullBookMarkIcStyle,
  FixedContainer,
} from "./styles";

interface detailInfo {
  paintingId: number;
  titleKr: string;
  titleOrigin: string;
  paintedAt: string;
  imgSrc: string;
  painterId: number;
  painterKr: string;
  painterOrigin: string;
  trendId: number;
  trend: string;
  paintingType: string;
  technique: string;
  description: string;
  wishStatus: boolean;
  exhibitionStatus: boolean;
}

const DetailPage = () => {
  const [description, setDescription] = useState(true);
  const [frame, setFrame] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  // const [speak, setSpeak] = useState(false);

  // 받아온 데이터 저장
  const [data, setData] = useState<detailInfo>({
    paintingId: 0,
    titleKr: "",
    titleOrigin: "",
    paintedAt: "",
    imgSrc: "",
    painterId: 0,
    painterKr: "",
    painterOrigin: "",
    trendId: 0,
    trend: "",
    paintingType: "",
    technique: "",
    description: "",
    wishStatus: false,
    exhibitionStatus: false,
  });

  const changeState = () => {
    setDescription(!description);
  };

  const changeFrame = () => {
    setFrame(!frame);
  };

  const changeBookmark = () => {
    setBookmark(!bookmark);
  };

  useEffect(() => {
    const getDetailData = async () => {
      const res = await getDetailApi();
      setData(res.data);
    };
    getDetailData();
  }, []);

  const imgURL = data.imgSrc;

  return (
    <DetailContainer>
      <BackgroundImg
        src={imgURL}
        description={description}
        referrerPolicy="no-referrer"
      />
      {description === true ? (
        <ContentContainer>
          <TitleOrigin len={data.titleOrigin.length}>
            {data.titleOrigin}
          </TitleOrigin>
          <TitleKr>{data.titleKr}</TitleKr>
          <br />
          <DetailDiv>
            <DetailContent>{data.painterOrigin}</DetailContent>
            <DetailContent>{data.paintedAt}</DetailContent>
            <DetailContent>
              {data.paintingType}, {data.technique}
            </DetailContent>
          </DetailDiv>
          <ContentDiv>
            <Content>{data.description}</Content>
          </ContentDiv>
          {/* <SpeakerImg /> */}
        </ContentContainer>
      ) : null}
      <FixedContainer>
        <DescriptionBtn onClick={changeState}>
          {description === true ? (
            <DescriptionP>Description On.</DescriptionP>
          ) : (
            <DescriptionP>Description Off.</DescriptionP>
          )}
        </DescriptionBtn>
        {description === true ? (
          <MarkContainer>
            {frame === false ? (
              <EmptyFrameIcStyle onClick={changeFrame} />
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}
            {bookmark === false ? (
              <EmptyBookMarkIcStyle onClick={changeBookmark} />
            ) : (
              <FullBookMarkIcStyle onClick={changeBookmark} />
            )}
          </MarkContainer>
        ) : null}
      </FixedContainer>
    </DetailContainer>
  );
};
export default DetailPage;
