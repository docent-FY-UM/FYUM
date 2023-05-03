import { customAxios } from "./customAxios";

<<<<<<< frontend/src/store/api.ts
interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

// 상세정보 api
export const getDetailApi = async () =>
  await customAxios.get("paintings/detail/30");

// 찜하기 api
export const fullBookmarkApi = async (paintingId: string) => {
  await customAxios.post(`wishlist/${paintingId}`);
};

// 찜하기 취소 api
export const emptyBookmarkApi = async (paintingId: string) => {
  await customAxios.delete(`wishlist/${paintingId}`);
};
// 그림 저장 api
export const createDrawingApi = async ({
  title,
  contents,
  img,
}: DrawingQueryTypes) =>
  await customAxios.post("mypaintings/save", {
    title: title,
    description: contents,
    base64: img,
  });
>>>>>>> frontend/src/store/api.ts
