import { customAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

// 상세정보 api
export const getDetailApi = async () =>
  await customAxios.get("paintings/detail/30");

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
