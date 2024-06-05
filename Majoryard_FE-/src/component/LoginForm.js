import React, { useState } from "react";
import InputField from "./InputField";
import Button from "../element/Button";
import "./InputField.css";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-form-container">
      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <InputField
            label="아이디"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="아이디를 입력하세요"
            required
          />
          <InputField
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요"
            required
          />
          <Button onSubmit={handleSubmit}>로그인</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
