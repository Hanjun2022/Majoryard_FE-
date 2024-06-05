import React from "react";
import InputField from "./InputField";
import "./SignUpForm.css";
import Button from "../element/Button";

const SignUpForm = (props) => {
  const passwordMatch = props.password === props.confirmPassword;
  return (
    <div className="signup-form-container">
      <div className="input-form">
        <form classNmae="form">
          <InputField
            label="아이디  "
            type="text"
            id="id"
            placeholder="아이디를 입력하세요"
            value={props.id}
            onChange={props.onChangeId}
          />
          <InputField
            label="닉네임  "
            type="text"
            id="nickname"
            placeholder="원하는 닉네임을 입력하세요"
            value={props.nickname}
            onChange={props.onChangeNickname}
          />
          <InputField
            label="비밀번호 "
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            value={props.password}
            onChange={props.onChangePassword}
          />
          <InputField
            label="비밀번호 확인"
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            value={props.confirmPassword}
            onChange={props.onChangeConfirmPassword}
          />
          {!passwordMatch && (
            <p className="password-mismatch">비밀번호가 다릅니다!</p>
          )}
          <InputField
            label="휴대폰번호"
            type="tel"
            id="phone"
            placeholder="-를 제외한 번호를 입력해주세요"
            value={props.phone}
            onChange={props.onChangePhone}
          />

          <InputField
            label="학과   "
            type="text"
            id="department"
            placeholder="학과를 검색해주세요"
            value={props.department}
            onChange={props.onChangeDepartment}
          />

          <InputField
            label="학교메일 "
            type="email"
            id="schoolEmail"
            placeholder="학교메일을 입력해주세요"
            value={props.schoolEmail}
            onChange={props.onChangeSchoolEmail}
          />
        </form>
        <Button>로그인</Button>
      </div>
    </div>
  );
};

export default SignUpForm;
