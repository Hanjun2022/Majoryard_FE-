import React from "react";
import { useParams } from "react-router-dom";
import MockData from "../../api/mycontent.json";
import PostDetail from "../../element/PostDetail";
import Comment from "../../element/Comment";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";

const CardDetailPage = () => {
  const { postId } = useParams();

  const postIdInt = parseInt(postId);

  const post = MockData.find((post) => post.post_id === postIdInt);

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

export default CardDetailPage;
