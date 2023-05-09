import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getMyDrawingsDetailApi, getMyPicturesDetailApi } from "../../store/api";
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
    if (locate === "painting") {
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
    } else if (locate === "picture") {
      const getMyPicturesDetail = async () => {
        try {
          const res = await getMyPicturesDetailApi(id);
          setData(res.data);
          setFrame(res.data.exhibitionStatus);
        } catch (error) {
          console.log(error);
        }
      };
      getMyPicturesDetail();
    }
   
  }, []);

  return <Detail data={data} frame={frame} setFrame={setFrame}/>;
};

export default DetailEtcPage;
