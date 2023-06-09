import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ArtListPage,
  DetailPage,
  DrawingPage,
  ExhibitionListPage,
  ExhibitionPage,
  GalleryPage,
  ListPage,
  LoginPage,
  MainPage,
  CollectionPage,
  RecommendationPage,
  SurveyPage,
  LikedListPage,
  IntroPage,
  KakaoHandle,
  MyDrawingsPage,
  DetailEtcPage,
  NotFoundPage,
} from "../src/pages/index";

import Header from "./components/common/Header";
import Modal from "./components/common/Modal";
import Loading from "./components/common/Loading";

function App() {
  let currentUrl = window.location.pathname.split("/");

  return (
    <BrowserRouter>
      {currentUrl[1] !== "" && <Header />}
      <Modal />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth" element={<KakaoHandle />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/recommend" element={<RecommendationPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/exhibitionlist" element={<ExhibitionListPage />} />
          <Route path="/liked-list" element={<LikedListPage />} />
          <Route path="/artlist/:name/:id" element={<ArtListPage />} />
          <Route path="/list/:id" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/detail/:name/:id" element={<DetailEtcPage />} />
          <Route path="/drawing" element={<DrawingPage />} />
          <Route path="/my-drawings" element={<MyDrawingsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
