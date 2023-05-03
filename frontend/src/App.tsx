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
  WishListPage,
  IntroPage,
  KakaoHandle,
  MyDrawingsPage,
  TestPage,
  Unity,
} from "../src/pages/index";

import Header from "./components/common/Header";
import Modal from "./components/common/Modal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
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
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/artlist/:name/:id" element={<ArtListPage />} />
        <Route path="/list/:id" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/drawing" element={<DrawingPage />} />
        <Route path="/my-drawings" element={<MyDrawingsPage />} />

        {/* 테스트 페이지 */}
        <Route path="/test" element={<TestPage></TestPage>} />
        <Route path="/unity" element={<Unity></Unity>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
