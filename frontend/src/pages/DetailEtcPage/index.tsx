import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getMyDrawingsDetailApi } from "../../store/api";
import Detail from "../../components/Detail";

export interface PaintingData {
  curation: any;
  discription: string;
  exhibitionStatus: boolean;
  imgSrc: string;
  paintingId: number;
  title: string;
}

const DetailEtcPage = () => {
  const location = useLocation();
  const [data, setData] = useState<PaintingData>({
    curation: null,
    discription: "",
    exhibitionStatus: false,
    imgSrc: "",
    paintingId: 0,
    title: "",
  });
  const [frame, setFrame] = useState(false);

  const pathName = location.pathname;
  const pathParts = pathName.split("/");
  const locate = pathParts[2];
  const id = pathParts[3];

  useEffect(() => {
    const getMyDrawingsDetail = async () => {
      try {
        const res = await getMyDrawingsDetailApi(id);
        setData(res.data);
        setFrame(res.data.exhibitionStatus);
      } catch (error) {
        console.log(error);
      }
    };
    getMyDrawingsDetail();
  }, []);

  return <Detail data={data} frame={frame} setFrame={setFrame}/>;
};

export default DetailEtcPage;
