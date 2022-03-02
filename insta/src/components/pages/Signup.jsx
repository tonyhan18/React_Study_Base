import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { addUser } from "../../apis/user";
import {
  Box,
  BtnSubmit,
  Form,
  InputText,
  Logo,
  Main,
  PageWrapper,
  SignupWrapper,
} from "../atoms/login";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = userInfo;
    if (password !== passwordConfirm) return alert("비밀번호가 같지 않습니다");
    if (password.length < 4) return alert("비밀번호가 너무 짧습니다");
    const { success } = await addUser(userInfo);
    console.log(success);
    if (success) {
      // 회원가입 성공
      alert("회원가입 성공");
      navigate("/login");
    } else {
      // 회원가입 실패
      alert("중복된 아이디 입니다.");
    }
  };

  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Form onSubmit={handleSubmit}>
            <InputText
              name="username"
              placeholder="사용자이름"
              value={userInfo.username}
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <InputText
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              value={userInfo.passwordConfirm}
              onChange={handleChange}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const FBLogin = styled.div`
  margin: 10px 40px 18px;
  font-size: 14px;
  color: #385185;
  font-weight: bold;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
`;

export default Signup;
