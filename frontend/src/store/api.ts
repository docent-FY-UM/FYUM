import { customAxios } from "./customAxios";

export const getDetailApi = async () =>
  await customAxios.get("paintings/detail/30");
