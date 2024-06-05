import React from "react";
import FindIdForm from "../../component/FindidForm";
import "./LoginPage.css";
import Mininav from "../../component/MiniNav";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";

const FindIdPage = () => {
  const buttons = [{ name: "비밀번호 찾기", path: "/find-password" }];
  return (
    <div>
      <HeaderSidebarSet />
      <h1 className="title">전공마당</h1>
      <h1 className="sub-title">아이디 찾기</h1>
      <FindIdForm></FindIdForm>
      <div>
        <Mininav buttons={buttons} />
      </div>
    </div>
  );
};

export default FindIdPage;
