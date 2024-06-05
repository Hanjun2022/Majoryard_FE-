// PromotionBoardContents.js

import React, { useState } from "react";
import "./PromotionBoardContents.css";
import { Link } from "react-router-dom";
import PromoData from "../../../api/BoardAPI/promotion.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const PromotionBoardContents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [promoType, setPromoType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const PromoCard = ({
    title,
    id,
    date,
    likes,
    scraps,
    comments,
    image,
    contents,
  }) => {
    return (
      <div className="promo-card-container">
        {image ? (
          <img src={image} alt="Card" />
        ) : (
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BTuOVomW8iF-QtEZHEfDDE34EGCeIq5whzlxrjALaA&s"
            }
            alt="Card"
            className="no-image"
          />
        )}
        <p className="promo-id">{id}</p>
        <h2>{title}</h2>
        <p className="promo-content">{contents}</p>
        <div className="promo-details">
          <p className="promo-date">{date}</p>
          <p className="promo-likes">
            <FontAwesomeIcon icon={faHeart} className="icon" /> {likes}
          </p>
          <p className="promo-scraps">
            <FontAwesomeIcon icon={faBookmark} className="icon" /> {scraps}
          </p>
          <p className="promo-comments">
            <FontAwesomeIcon icon={faComment} className="icon" />
            {comments}
          </p>
        </div>
      </div>
    );
  };

  const handleSearch = () => {
    const results = PromoData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // 타입 필터링 핸들러
  const handlePromoType = (type) => {
    setPromoType(type);
  };

  return (
    <div className="promotionboard">
      <div className="head-contents">
        <h2>홍보게시판</h2>
        <div className="input">
          <input
            type="text"
            placeholder="게시물 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>
      <div className="promotionboard-contents">
        <div className="promotion-type-button">
          <button
            className={!promoType ? "type-chosen" : ""}
            onClick={() => handlePromoType("")}
          >
            전체
          </button>
          <button
            className={promoType === "공모전" ? "type-chosen" : ""}
            onClick={() => handlePromoType("공모전")}
          >
            공모전
          </button>
          <button
            className={promoType === "동아리" ? "type-chosen" : ""}
            onClick={() => handlePromoType("동아리")}
          >
            동아리
          </button>
          <button
            className={promoType === "대외활동" ? "type-chosen" : ""}
            onClick={() => handlePromoType("대외활동")}
          >
            대외활동
          </button>
        </div>
        <div className="promotionBoard-posts">
          {(searchResults.length > 0 ? searchResults : PromoData)
            .filter((post) => !promoType || post.type === promoType)
            .map((post) => (
              <Link to={`${post.post_id}`} key={post.post_id}>
                <PromoCard
                  image={post.image}
                  title={
                    post.title.length > 25
                      ? post.title.slice(0, 23) + "..."
                      : post.title
                  }
                  id={post.id}
                  date={post.date}
                  likes={post.likes}
                  scraps={post.scraps}
                  comments={post.comments}
                  contents={
                    post.content.length > 50
                      ? post.content.slice(0, 50) + "..."
                      : post.content
                  }
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionBoardContents;
