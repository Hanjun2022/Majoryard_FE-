import React, { useState } from "react";
import "./PostDetail.css";
//import axios from "axios";

const PostDetail = ({ post,props }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const [Subscribed,setSubscribed]=useState(false);
  const buttonClass = Subscribed ? 'button subscribed' : 'button not-subscribed';

//   구독 여부 정보 가져오기  localStorage 에 db를  써야 할듯
//   const handleSubscribe=()=>{
//     const subscribedVariable={
//       userTo:props.userTo
//       userFrom: localStorage.getItem("userId"),
//     }
//   }
//
//
//   axios.post("/api/subscribe/subscribed", subscribedVariable).then((res) => {
//     if (res.data.success) {
//       console.log(res.data);
//       setSubscribed(res.data.subscribed);
//     } else {
//       alert("정보를 받아오지 못했습니다.");
//     }
//   });
// }, []);
//
//api 주소 
// const handleSubscribe=()=>{
//   const subscribedVariable = {
//     userTo: props.userTo,
//     userFrom: props.userFrom,
//   };
//   if(Subscribed){
//     axios
//    .post("api 주소 ", subscribedVariable)
//     .then((res) => {
//       if (res.data.success) {
//         setSubscribeNumber(SubscribeNumber - 1);
//         setSubscribed(!Subscribed);
//       } else {
//         alert("구독 취소 실패");
//       }
//    });
//   }
// }
// else {
//   axios.post("/api/subscribe/subscribe", subscribedVariable).then((res) => {
//     if (res.data.success) {
//       setSubscribeNumber(SubscribeNumber + 1);
//       setSubscribed(!Subscribed);

//     else {
//       alert("구독 실패");
//     }
//   }
// }
//   });
// }
// };
//onClick ={ handleSubscribe}
  return (
    <div className="detail-page">
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <p className="writer">{post.id}</p>
        <button className={buttonClass} >
          {Subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
        {post.image && (
          <img src={post.image} alt={post.title} className="post-image" />
        )}

        <p className="post-content">{post.content}</p>
        <div className="post-details">
          <p className="post-date">{post.date}</p>
          <p className="post-likes" onClick={handleLikeClick}>
            좋아요 {likes}
          </p>
          <p className="post-scraps">스크랩 {post.scraps}</p>
          <p className="post-comments">댓글 {post.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
