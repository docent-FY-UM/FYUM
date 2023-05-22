import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";

import {
  getMyDrawingsDetailApi,
  getMyPicturesDetailApi,
  getCurationApi,
} from "../../store/api";
import Loading from "../../components/common/Loading";

const DetailComponent = React.lazy(() => import("../../components/Detail"));

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
  const [curation, setCuration] = useState("");

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

    const getCuration = async () => {
      try {
        const res = await getCurationApi(id);
        // 아직 큐레이션이 생성되지 않은 경우, 요청을 다시 보낸다.
        if (res.data.status === 400) {
          setTimeout(getCuration, 1000);
        } else {
          setCuration(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCuration();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {curation.length >= 1 ? (
        <DetailComponent
          data={data}
          curation={curation}
          frame={frame}
          setFrame={setFrame}
        />
      ) : (
        <Loading />
      )}
    </Suspense>
  );
};

export default DetailEtcPage;
