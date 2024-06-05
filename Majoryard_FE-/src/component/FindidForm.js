import React, { useState } from "react";
import InputField from "./InputField";
import Button from "../element/Button";

const FindIdPage = () => {
  // 상태 변수 선언
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 이름 입력 시 이벤트 핸들러
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 휴대폰 번호 입력 시 이벤트 핸들러
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // 아이디 찾기 버튼 클릭 시 이벤트 핸들러
  const handleFindId = () => {
    // 아이디 찾기 로직 구현
    // 여기서는 단순히 이름과 휴대폰 번호를 콘솔에 출력하는 것으로 가정
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="login-form-container">
      <div className="input-form">
        <form onSubmit={handleFindId}></form>
        <InputField
          label="이름"
          type="text"
          id="name"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={handleNameChange}
        />
        <InputField
          label="휴대폰 번호"
          type="text"
          id="phoneNumber"
          placeholder="휴대폰 번호를 입력하세요"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <Button onClick={handleFindId}>아이디 찾기</Button>
      </div>
    </div>
  );
};

export default FindIdPage;
