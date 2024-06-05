import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({
  title,
  content,
  date,
  likes,
  scraps,
  comments,
  image,
  handleTitleClick,
  handleContentClick,
  handleLikeClick,
  handleScrapClick,
}) => {
  return (
    <div className="card-total">
      <div className="card">
        <h2 className="card-title" onClick={handleTitleClick}>
          {title}
        </h2>
        <p className="card-content" onClick={handleContentClick}>
          {content}
        </p>
        <div className="card-details">
          <p className="card-date">{date}</p>
          <p className="card-likes" onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faHeart} className="icon" /> {likes}
          </p>
          <p className="card-scraps" onClick={handleScrapClick}>
            <FontAwesomeIcon icon={faBookmark} className="icon" /> {scraps}
          </p>
          <p className="card-comments">
            <FontAwesomeIcon icon={faComment} className="icon" />
            {comments}
          </p>
        </div>
      </div>
      {image && <img src={image} alt="Card" className="card-image" />}
    </div>
  );
};

export default Card;
