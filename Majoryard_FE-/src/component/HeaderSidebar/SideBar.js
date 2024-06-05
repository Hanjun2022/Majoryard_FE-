import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/freeboard">자유게시판</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/promotionboard">홍보게시판</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/askboard">질문게시판</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/newsboard">뉴스게시판</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/studyboard">스터디게시판</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
