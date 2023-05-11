import { customAxios, djangoAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

interface ListQueryTypes {
  listUrl: string;
  page: number;
}

interface ArtListQueryTypes {
  artListUrl: string;
  urlType: string;
  page: number;
}

// 상세정보 api
export const getDetailApi = async (paintingId: string) => {
  try {
    const response = await customAxios.get(`paintings/detail/${paintingId}`);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

// 찜하기 api
export const fullBookmarkApi = async (paintingId: string) => {
  await customAxios.post(`wishlist/${paintingId}`);
};

// 찜하기 취소 api
export const emptyBookmarkApi = async (paintingId: string) => {
  await customAxios.delete(`wishlist/${paintingId}`);
};

// survey 결과 전송
export const surveySubmitApi = async (choosed: number[]) =>
  await djangoAxios.post("/recomm/recom/", {
    choosed: choosed,
  });

// 추천 결과 받아오기
export const getRecommendApi = async () =>
  await customAxios.get("recommends/recommends");

// liked 페이지 api
export const likedListApi = async () => await customAxios.get("wishlist");

// 전시회 저장 api
export const fullFrameApi = async (paintingId: string) =>
  await customAxios.post("exhibitions", { paintingId });

// 전시회 저장 취소 api
export const emptyFrameApi = async (paintingId: string) =>
  await customAxios.put("exhibitions", { paintingId });

// 전시회 리스트 받아오기
export const getExhibitionListApi = async () =>
  await customAxios.get("exhibitions");

// 내 그림 리스트 받아오기
export const getMyDrawingsListApi = async () =>
  await customAxios.get("mypaintings");

// 내 그림 상세정보 받아오기
export const getMyDrawingsDetailApi = async (myPaintingId: string) =>
  await customAxios.get(`mypaintings/detail/${myPaintingId}`);

// 내 사진 상세정보 받아오기
export const getMyPicturesDetailApi = async (myPaintingId: string) =>
  await customAxios.get(`mypaintings/picture/detail/${myPaintingId}`);

// 내 그림 삭제
export const deleteMyDrawingApi = async (myPaintingId: string) =>
  await customAxios.delete(`mypaintings/${myPaintingId}`);

// 내 사진 삭제
export const deleteMyPictureApi = async (myPaintingId: string) =>
  await customAxios.delete(`mypaintings/picture/${myPaintingId}`);

// 그림 저장 api
export const createDrawingApi = async ({
  title,
  contents,
  img,
}: DrawingQueryTypes) => {
  const response = await customAxios.post("mypaintings/save", {
    title: title,
    description: contents,
    img: img,
  });

  return response;
};

// 사진 업로드 api
export const createPictureApi = async ({
  title,
  contents,
  img,
}: DrawingQueryTypes) => {
  const response = await customAxios.post("mypaintings/picture/save", {
    title: title,
    description: contents,
    img: img,
  });

  return response;
};

// list 페이지 api
export const getListApi = async ({ listUrl, page }: ListQueryTypes) =>
  await customAxios.get(`/paintings/${listUrl}/?page=${page + 1}`);

// artList 페이지 api
export const getArtListApi = async ({
  artListUrl,
  urlType,
  page,
}: ArtListQueryTypes) =>
  await customAxios.get(
    `/paintings/${artListUrl}/${urlType}/?page=${page + 1}`
  );

// 찜하기 이후에 추천결과 반영하기
export const addLikedApi = async () => await djangoAxios.get("/recomm/test");
