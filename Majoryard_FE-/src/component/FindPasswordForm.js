import React, { useState } from "react";
import InputField from "./InputField";
import Button from "../element/Button";

const FindPasswordPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // 비밀번호 찾기 버튼 클릭 시 이벤트 핸들러
  const handleFindPassword = () => {
    // 비밀번호 찾기 로직 구현
    console.log("Username:", username);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="login-form-container">
      <div className="input-form">
        <form onSubmit={handleFindPassword}></form>
        <InputField
          label="아이디"
          type="text"
          id="username"
          placeholder="아이디를 입력하세요"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputField
          label="휴대폰 번호"
          type="text"
          id="phoneNumber"
          placeholder="휴대폰 번호를 입력하세요"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <Button onClick={handleFindPassword}>비밀번호 찾기</Button>
      </div>
    </div>
  );
};

export default FindPasswordPage;
