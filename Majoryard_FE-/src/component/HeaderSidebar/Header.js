import React from "react";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import UserData from "../../api/user.json"
import io from "socket.io-client";

const APIId = UserData.user_name; //유저의 현재 id
let APILogedIn = UserData.isLogedin; //로그인 상태
const APIMajor = UserData.user_major; //유저가 보고 있는 학과
const APIEmail = UserData.user_email;

const socket = io.connect("http://localhost:3001");

const Header = ({ onToggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
 // const [openModal,setOpenModal]=useState(false);
  const LogoModal = () => {
    return (
      <div className="logo-modal"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <ul>
          <li className="name">{APIId}</li>
          <li><a href="mailto:recipient@example.com?subject=&body=" className="email">{APIEmail}</a></li>
          <li><Link to={"/write"}>글쓰기</Link></li>
          <li><a><Link to={"chat"}>채팅</Link></a></li>
          <li><Link to={"/mypage"}>마이페이지</Link></li>
          <li><a>로그아웃</a></li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div className="first-header">
        <Link to="/" className="title-link"><h1>전공마당</h1></Link>
        <ul>
          <li><Link to={!APILogedIn && "/login"}>{APILogedIn ? <Link to="/mypage">안녕하세요 {APIId}님</Link> : "로그인"}</Link></li>
          <li><button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link to={!APILogedIn && "/signup"} className="button">
              {APILogedIn ? "o" : "가입하기"}
            </Link></button></li>
          {isHovered && <LogoModal />}
        </ul>
      </div>
      <hr />
      <div className="second-header">
        <ul>
          <li><a onClick={onToggleSidebar}>게시판</a></li>
          <li><Link to='/write' >글쓰기</Link></li>
          <li><a>과: {APIMajor}</a></li>
        </ul>
      </div>
      <hr />
    </div >
  );
};

export default Header;
