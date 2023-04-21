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
  MasterpiecePage,
  RecommendationPage,
  SurveyPage,
  WishListPage,
  IntroPage,
  TestPage,
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
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/recommend" element={<RecommendationPage />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/masterpiece" element={<MasterpiecePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/exhibitionlist" element={<ExhibitionListPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/artlist/:name" element={<ArtListPage />} />
        <Route path="/list/:id" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/drawing" element={<DrawingPage />} />

        {/* 테스트 페이지 */}
        <Route path="/test" element={<TestPage></TestPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
