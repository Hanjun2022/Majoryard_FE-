import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from "./pages/MemberManagePages/LoginPage";
import SignUpPage from "./pages/MemberManagePages/SignUpPage";
import FindIdPage from "./pages/MemberManagePages/FindidPage";
import FindPasswordPage from "./pages/MemberManagePages/FindPasswordPage";
import MyPage from "./pages/MyPage";
import CardDetailPage from "./pages/BoardDetailPages/CardDetailPage";
import FreeBoardPage from "./pages/BoardPages/FreeBoardPage";
import PromotionBoardPage from "./pages/BoardPages/PromotionBoardPage";
import AskBoardPage from "./pages/BoardPages/AskBoardPage";
import NewsBoardPage from "./pages/BoardPages/NewsBoardPage";
import FreeCardDetailPage from "./pages/BoardDetailPages/FreeDetailPage";
import PromotionDetailPage from "./pages/BoardDetailPages/PromotionDetailPage";
import AskDetailPage from "./pages/BoardDetailPages/AskDetailPage";
import Home from "./pages/Home";
import StudyDetailPage from "./pages/BoardDetailPages/StudyDetailPage";
import NewsDetailPage from "./pages/BoardDetailPages/NewsDetailPage";
import StudyBoardPage from "./pages/BoardPages/StudyBoardPage";
import WritePostPage from "./pages/WritePostPage";
import ChatRoom from "./component/client/ChatRoom"


function Main() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="find-id" element={<FindIdPage />} />
        <Route path="find-password" element={<FindPasswordPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="write" element={<WritePostPage />} />
        <Route path="/detail/:postId" element={<CardDetailPage />} />
        <Route path="freeboard" element={<FreeBoardPage />} />
        <Route path="freeboard/:postId" element={<FreeCardDetailPage />} />
        <Route path="promotionboard" element={<PromotionBoardPage />} />
        <Route
          path="promotionboard/:postId"
          element={<PromotionDetailPage />}
        />
        <Route path="chat" element={<ChatRoom />}/>
       

        <Route path="askboard" element={<AskBoardPage />} />
        <Route path="askboard/:postId" element={<AskDetailPage />} />
        <Route path="studyboard" element={<StudyBoardPage />} />
        <Route path="studyboard/:postId" element={<StudyDetailPage />} />
        <Route path="newsboard" element={<NewsBoardPage />} />
        <Route path="newsboard/:postId" element={<NewsDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
