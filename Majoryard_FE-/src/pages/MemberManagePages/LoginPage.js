// LoginPage.js
import React from "react";
import LoginForm from "../../component/LoginForm";
import "./LoginPage.css";
import MiniNav from "../../component/MiniNav";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";

const LoginPage = () => {
  const buttons = [
    { name: "아이디 찾기", path: "/find-id" },
    { name: "비밀번호 찾기", path: "/find-password" },
    { name: "회원가입", path: "/signup" },
  ];
  return (
    <div>
      <HeaderSidebarSet />
      <h1 className="title">전공마당</h1>
      <LoginForm />
      <div>
        <MiniNav buttons={buttons} />
      </div>
    </div>
  );
};

export default LoginPage;
