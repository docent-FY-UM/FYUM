export const goMyGallery = (gallerycode: Number, userToken: String) => {
  window.location.href =
    process.env.REACT_APP_API_BASE_URL +
    `/unityPage?num=${gallerycode}&token=${userToken.split(" ")[1]}`;
  return undefined;
};
