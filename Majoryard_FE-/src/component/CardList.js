import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../element/Card";
import mockData from "../api/mycontent.json";
import "./CardList.css";

const CardList = () => {
  const navigate = useNavigate();

  // 좋아요 수 상태를 관리하기 위한 useState 훅 사용
  const [likeCounts, setLikeCounts] = useState(
    mockData.map((post) => post.likes)
  );

  const [scrapCounts, setScrapCounts] = useState(
    mockData.map((post) => post.scraps)
  );

  const handleTitleClick = (postId) => {
    navigate(`/detail/${postId}`);
  };

  const handleContentClick = (postId) => {
    navigate(`/detail/${postId}`);
  };

  const handleLikeClick = (index) => {
    const updatedLikeCounts = [...likeCounts];
    updatedLikeCounts[index]++;
    setLikeCounts(updatedLikeCounts);
  };

  const handleScrapClick = (index) => {
    const updatedScrapCounts = [...scrapCounts];
    updatedScrapCounts[index]++;
    setScrapCounts(updatedScrapCounts);
  };

  return (
    <div className="card-list">
      <div className="posts">
        {mockData.map((post, index) => (
          <Card
            key={post.post_id}
            image={post.image}
            title={post.title}
            content={
              post.content.length < 200
                ? post.content
                : post.content.slice(0, 200) + "..."
            }
            date={post.date}
            likes={likeCounts[index]} // 좋아요 수 상태를 전달
            scraps={scrapCounts[index]}
            comments={post.comments}
            handleTitleClick={() => handleTitleClick(post.post_id)} // 제목 클릭 이벤트 처리 함수 전달
            handleContentClick={() => handleContentClick(post.post_id)} // 내용 클릭 이벤트 처리 함수 전달
            handleLikeClick={() => handleLikeClick(index)}
            handleScrapClick={() => handleScrapClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
