export const goMyGallery = (gallerycode: Number, userToken: String) => {
  window.location.replace(
    process.env.REACT_APP_API_BASE_URL +
      `/unityPage?num=` +
      { gallerycode } +
      `&token=` +
      { userToken }
  );
  return undefined;
};
