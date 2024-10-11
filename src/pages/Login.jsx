import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import kakaoIcon from '../assets/kakao.png';
//test image
import testaIcon from '../assets/podol.jpg';
import styled from 'styled-components';
import {useSetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {userAtoms} from '../recoil/userAtoms';

const Login = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  // Kakao Login function to redirect user to Kakao login page
  const kakaoLogin = () => {
    const kakaoClient = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const kakaoRedirect = import.meta.env.VITE_KAKAO_REDIRECT_URL;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClient}&redirect_uri=${kakaoRedirect}&response_type=code`;
  };

  // naver login function to redirect user to google login page
  const naverLogin = () => {
    const naverClient = import.meta.env.VITE_NAVER_CLIENT_ID;
    const navetRedirect = import.meta.env.VITE_NAVER_REDIRECT_URL;
    const state = generateRandomState();

    sessionStorage.setItem('naver_login_state', state);

    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClient}&state=${state}&redirect_uri=${navetRedirect}`;
  };

  // Google login function to redirect user to google login page
  const googleLogin = () => {
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const googleRedirect = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    const scope = 'email profile';

    setTimeout(() => {
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=${encodeURIComponent(googleRedirect)}&scope=${encodeURIComponent(scope)}`;
    }, 100);
  };

  const noLogin = () => {
    const isNewcomer = true;
    setAuthState({
      isAuthenticated: true,
      user: "test",
      accessToken: "testToken",
      idToken: null,
      isNewcomer: isNewcomer,
    });
    if (isNewcomer) {
      navigate('/basic/nickname');
    } else {
      navigate('/main');
    }
  }

  // CSRF Protection
  function generateRandomState(length = 16) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => ('0' + byte.toString(16)).slice(-2)).join('');
  }

  return (
      <Wrapper>
        <LogoImg />
        <SettingTitle>로그인을 위한 계정을 선택해주세요</SettingTitle>
        <ButtonContainer>
          <Button type="button" onClick={googleLogin}>
            <GoogleImg />
            구글로 시작하기
          </Button>

          <Button type="button" onClick={naverLogin}>
            <NaverImg />
            네이버로 시작하기
          </Button>
          <Button type="button" onClick={kakaoLogin}>
            <KakaoImg />
            카카오로 시작하기
          </Button>
          <Button type="button" onClick={noLogin}>
            <TestImg />
            그냥 시작하기
          </Button>
        </ButtonContainer>
      </Wrapper>
  );
};

export default Login;

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img.attrs({
  src: logoImage,
  alt: '',
})`
  top: 15.3vw;
  position: absolute;
  width: 15.6vw;
  height: 2.6vw;
`;

const SettingTitle = styled.h1`
  font-family: 'Pretendard-SemiBold';
  position: absolute;
  text-align: center;
  color: white;
  font-size: 1.35vw;
  top: 20vw;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 24.5vw;
`;

const Button = styled.button`
  width: 36.25vw;
  height: 4.6vw;
  margin-top: 1.25vw;
  background-color: rgba(8, 8, 8, 0.3);
  color: #787878;
  font-family: 'Pretendard-Medium';
  border-radius: 1vw;
  border: 1px solid #787878;
  transition: 0.5s ease;
  text-align: center;
  font-size: 1.45vw;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    color: white;
    transition: 0.5s ease;
  }
`;

const GoogleImg = styled.img.attrs({
  src: googleIcon,
  alt: '',
})`
  position: absolute;
  width: 2vw;
  height: 2vw;
  left: 1.25vw;
`;

const NaverImg = styled.img.attrs({
  src: naverIcon,
  alt: '',
})`
  position: absolute;
  width: 2vw;
  height: 2vw;
  left: 1.25vw;
`;

const KakaoImg = styled.img.attrs({
  src: kakaoIcon,
  alt: '',
})`
  position: absolute;
  width: 2vw;
  height: 2vw;
  left: 1.25vw;
`;

const TestImg = styled.img.attrs({
  src: testaIcon,
  alt: '',
})`position: absolute;
width: 2vw;
height: 2vw;
left: 1.25vw;`;