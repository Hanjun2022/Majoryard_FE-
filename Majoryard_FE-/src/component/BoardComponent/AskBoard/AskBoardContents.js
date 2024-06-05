import React, { useState } from "react";
import "./AskBoardContents.css";
import { Link } from "react-router-dom";
import AskData from "../../../api/BoardAPI/ask.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const AskBoardContents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const AskCard = ({
    answered,
    title,
    content,
    date,
    likes,
    scraps,
    comments,
    image,
  }) => {
    return (
      <div className="AskCard-div">
        <div className="AskCard">
          <p className={answered ? "AskCard-answered" : "AskCard-not-answered"}>
            {answered ? "질문 해결" : "질문 대기"}
          </p>
          <h2 className="AskCard-title">{title}</h2>
          <p className="AskCard-content">{content}</p>
          <div className="card-details">
            <p className="card-date">{date}</p>
            <p className="card-likes">
              <FontAwesomeIcon icon={faHeart} className="icon" /> {likes}
            </p>
            <p className="card-scraps">
              <FontAwesomeIcon icon={faBookmark} className="icon" /> {scraps}
            </p>
            <p className="card-comments">
              <FontAwesomeIcon icon={faComment} className="icon" />
              {comments}
            </p>
          </div>
        </div>
        {image && <img src={image} alt="Card" className="AskCard-image" />}
      </div>
    );
  };

  const handleSearch = () => {
    const results = AskData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="askboard">
      <div className="head-contents">
        <h2>질문게시판</h2>
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
      <div className="AskBoard-contents-div">
        {searchResults.length > 0
          ? searchResults.map((post) => (
              <Link to={post.post_id} key={post.post_id}>
                <AskCard
                  answered={post.answer}
                  image={post.image}
                  title={post.title}
                  content={
                    post.content.length < 230
                      ? post.content
                      : post.content.slice(0, 230) + "..."
                  }
                  date={post.date}
                  likes={post.likes}
                  scraps={post.scraps}
                  comments={post.comments}
                />
              </Link>
            ))
          : AskData.map((post) => (
              <Link to={post.post_id} key={post.post_id}>
                <AskCard
                  answered={post.answer}
                  image={post.image}
                  title={post.title}
                  content={
                    post.content.length < 230
                      ? post.content
                      : post.content.slice(0, 230) + "..."
                  }
                  date={post.date}
                  likes={post.likes}
                  scraps={post.scraps}
                  comments={post.comments}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default AskBoardContents;
