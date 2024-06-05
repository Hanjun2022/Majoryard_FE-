import React, { useState } from "react";
import "./Comment.css";
import commentData from "../api/comment.json";

const Comment = () => {
  const [comments, setComments] = useState(commentData);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = (commentId) => {
    const newComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...(comment.replies || []),
            {
              id: Date.now(),
              nickname: "닉네임1",
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
              content: replyContent,
            },
          ],
        };
      }
      return comment;
    });

    setComments(newComments);
    setReplyingTo(null);
    setReplyContent("");
  };

  return (
    <div>
      <div className="comment-title">댓글</div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment-header">
            <span className="comment-nickname">{comment.nickname}</span>
          </div>
          <div className="comment-content">{comment.content}</div>
          <div className="comment-bottom">
            <div>
              <span className="comment-date">{comment.date}</span>
              <span className="comment-time">{comment.time}</span>
            </div>
            <button
              className="reply-button"
              onClick={() => handleReplyClick(comment.id)}
            >
              답글쓰기
            </button>
          </div>

          {replyingTo === comment.id && (
            <div className="reply-form">
              <textarea
                className="reply-textarea"
                value={replyContent}
                onChange={handleReplyChange}
                placeholder="댓글을 입력하세요"
              />
              <button
                className="submit-reply-button"
                onClick={() => handleReplySubmit(comment.id)}
              >
                등록
              </button>
            </div>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="replies">
              {comment.replies.map((reply) => (
                <div className="comment-reply" key={reply.id}>
                  <div className="comment-header">
                    <span className="comment-nickname">{reply.nickname}</span>
                    <div className="comment-content">{reply.content}</div>
                    <div>
                      <span className="comment-date">{reply.date}</span>
                      <span className="comment-time">{reply.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comment;
