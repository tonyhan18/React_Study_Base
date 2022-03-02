import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { getToken } from "../../apis/user";
import {
  Box,
  BtnSubmit,
  Form,
  InputText,
  Logo,
  PageWrapper,
  SignupWrapper,
  Main,
} from "../atoms/login";
import { Instance } from "../../apis/index.js";
import UserContext from "../../contexts/user";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  const { setIsLogin } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, token } = await getToken(loginInfo);
    if (success) {
      localStorage.token = token;
      Instance.defaults.headers.common["Authorization"] = token;
      setIsLogin(true);
      navigate("/");
    } else {
      alert("로그인 실패");
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
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={handleChange}
            />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
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

export default Login;
