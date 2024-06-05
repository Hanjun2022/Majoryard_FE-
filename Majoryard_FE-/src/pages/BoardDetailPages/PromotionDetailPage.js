import React from "react";
import { useParams } from "react-router-dom";
import MockData from "../../api/BoardAPI/promotion.json";
import Comment from "../../element/Comment";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";
import PostDetail from "../../element/PostDetail";
const PromotionDetailPage = () => {
  const { postId } = useParams();

  const post = MockData.find((post) => post.post_id === postId);

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <HeaderSidebarSet />
      <div className="detail-page">
        <PostDetail post={post} />
        <Comment />
      </div>
    </div>
  );
};

export default PromotionDetailPage;
