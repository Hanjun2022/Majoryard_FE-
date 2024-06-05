import "./HomeContents.css";
import PromoData from "../../../api/BoardAPI/promotion.json";
import FreeData from "../../../api/BoardAPI/free.json";
import NewsData from "../../../api/BoardAPI/news.json";
import StudyData from "../../../api/BoardAPI/study.json";
import AskData from "../../../api/BoardAPI/ask.json";
import { Link } from "react-router-dom";

const HomeContents = () => {
  return (
    <div className="home_contents_div">
      <div className="white_board">
        {PromoData.slice(0, 4).map((post) => (
          <Link to={`promotionboard/${post.post_id}`} key={post.post_id}>
            <img src={post.image} className="promo_img" />
          </Link>
        ))}
      </div>
      <div className="other_board">
      <div className="inner_board">
          <h2>자유게시판</h2>
          <hr />
          {FreeData.slice(0, 8).map((post) => (
            <div className="inner_board_text_div">
              <Link to={`freeboard/${post.post_id}`} key={post.post_id}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="inner_board">
          <h2>뉴스게시판</h2>
          <hr />
          {NewsData.slice(0, 8).map((post) => (
            <div className="inner_board_text_div">
              <Link to={`newsboard/${post.post_id}`} key={post.post_id}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="inner_board">
          <h2>질문게시판</h2>
          <hr />
          {AskData.slice(0, 8).map((post) => (
            <div className="inner_board_text_div">
              <Link to={`askboard/${post.post_id}`} key={post.post_id}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
