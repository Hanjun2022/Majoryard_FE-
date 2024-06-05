import React, { useState } from "react";
import SignUpForm from "../../component/SignUpForm";
import "./SignUpPage.css";
import HeaderSidebarSet from "../../component/HeaderSidebar/HeaderSidebarSet";

function SignUpPage() {
  // 각 입력 필드의 상태를 관리하는 state 정의
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");

  // 입력 값 변경 시 해당 state 업데이트하는 핸들러 함수 정의
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleSchoolEmailChange = (event) => {
    setSchoolEmail(event.target.value);
  };

  return (
    <div className="app">
      <HeaderSidebarSet />
      <header className="signup-header">
        <h3>전공마당</h3>
        <p>
          가입하면 <span>매번 나에게 꼭 맞는 정보</span>만<br></br> 모아볼 수
          있어요!
        </p>
      </header>

      <SignUpForm
        id={id}
        onChangeId={handleIdChange}
        nickname={nickname}
        onChangeNickname={handleNicknameChange}
        password={password}
        onChangePassword={handlePasswordChange}
        confirmPassword={confirmPassword}
        onChangeConfirmPassword={handleConfirmPasswordChange}
        phone={phone}
        onChangePhone={handlePhoneChange}
        department={department}
        onChangeDepartment={handleDepartmentChange}
        schoolEmail={schoolEmail}
        onChangeSchoolEmail={handleSchoolEmailChange}
        className="signup-form"
      />
    </div>
  );
}

export default SignUpPage;
