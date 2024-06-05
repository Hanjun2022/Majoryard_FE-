// MemberCard.js

import React from "react";
import "./MemberCard.css";

const MemberCard = ({ userData }) => {
  return (
    <div className="member-card">
      <div className="profile-left">
        <img
          alt="프로필 이미지"
          className="profile-image"
          src={userData.image}
        />
        <div className="name-id-grade">
          <div className="name">{userData.name}</div>
          <div className="id-grade">
            <div className="id">{userData.id}</div>
            <div className="grade">{userData.grade}학년</div>
          </div>
          <div className="introduction">{userData.intro}</div>
        </div>
      </div>

      <button className="chat-button">채팅하기</button>
    </div>
  );
};

export default MemberCard;
