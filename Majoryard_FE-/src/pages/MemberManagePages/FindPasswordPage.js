import React from "react";
import "./LoginPage.css";
import Mininav from "../../component/MiniNav";
import FindPasswordForm from "../../component/FindPasswordForm";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";

const FindPasswordPage = () => {
  const buttons = [{ name: "아이디찾기", path: "/find-id" }];
  return (
    <div>
      <HeaderSidebarSet />
      <h1 className="title">전공마당</h1>
      <h1 className="sub-title">비밀번호 찾기</h1>
      <FindPasswordForm />
      <div>
        <Mininav buttons={buttons} />
      </div>
    </div>
  );
};

export default FindPasswordPage;
