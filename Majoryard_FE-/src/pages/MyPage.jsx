import React, { useState } from "react";
import "./MyPage.css";
import CardList from "../component/CardList";
import HeaderSidebarSet from "../component/HeaderSidebar/HeaderSidebarSet";
import UserData from "../api/user.json";
import MemberCardList from "../component/MemberCardList";

const MyPage = () => {
  const profileData = {
    profileImage: UserData.user_pic,
    name: UserData.user_name,
    id: UserData.user_ID,
    grade: UserData.user_grade,
    introduction: UserData.user_intro,
  };

  const [activeButton, setActiveButton] = useState("포스트");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <HeaderSidebarSet />
      <div className="mypage-container">
        <div className="profile-section">
          <div className="profile-top">
            <img
              alt="프로필 이미지"
              className="profile-image"
              src={profileData.profileImage}
            />
            <div className="name-id-grade">
              <div className="name">{profileData.name}</div>
              <div className="id-grade">
                <div className="id">{profileData.id}</div>
                <div className="grade">{profileData.grade}</div>
              </div>
            </div>
          </div>
          <div className="introduction">{profileData.introduction}</div>
          <button className="edit-button">프로필 수정하기</button>
        </div>
        <div className="content">
          <div className="option-bar">
            <button
              className={`option-button ${
                activeButton === "포스트" ? "active" : ""
              }`}
              onClick={() => handleClick("포스트")}
            >
              포스트
            </button>
            <button
              className={`option-button ${
                activeButton === "스크랩" ? "active" : ""
              }`}
              onClick={() => handleClick("스크랩")}
            >
              스크랩
            </button>
            <button
              className={`option-button ${
                activeButton === "구독한 회원" ? "active" : ""
              }`}
              onClick={() => handleClick("구독한 회원")}
            >
              구독한 회원
            </button>
          </div>
          <div className="option-content">
            {activeButton === "포스트" && <CardList />}
            {activeButton === "스크랩" && <CardList />}
            {activeButton === "구독한 회원" && <MemberCardList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
