import { useState } from "react";
import "./FreeBoardContents.css";
import FreeData from "../../../api/BoardAPI/free.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FreeBoardContents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const FreeCard = ({
    title,
    content,
    date,
    likes,
    scraps,
    comments,
    image,
  }) => {
    return (
      <div className="FreeCard-div">
        <div className="FreeCard">
          <h2 className="FreeCard-title">{title}</h2>
          <div className="FreeCard-content">{content}</div>
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
    const results = FreeData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="freeboard">
      <div className="head-contents">
        <h2>자유게시판</h2>
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
      <div className="freeboard-contents">
        {searchResults.length > 0
          ? searchResults.map((post) => (
              <Link to={post.post_id} key={post.post_id}>
                <FreeCard
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
          : FreeData.map((post) => (
              <Link to={post.post_id} key={post.post_id}>
                <FreeCard
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

export default FreeBoardContents;
