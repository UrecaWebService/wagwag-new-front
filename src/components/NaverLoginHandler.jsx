// src/components/NaverLoginHandler.jsx

import { useSetRecoilState } from "recoil";
import { userAtoms } from "../recoil/userAtoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage"

const NaverLoginHandler = () => {
    const navigate = useNavigate();
    const setAuthState = useSetRecoilState(userAtoms);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    useEffect(() => {
        const handleNaverLogin = async () => {
            const code = new URLSearchParams(window.location.search).get('code');
            const urlState = new URLSearchParams(window.location.search).get('state'); // protect from CSRF

            if(code && urlState){
                const storedState = sessionStorage.getItem('naver_login_state');

                // state 값 비교
                if (urlState !== storedState) {
                    console.error('Invalid state parameter');
                    navigate('/login');
                    return;
                }
                sessionStorage.removeItem('naver_login_state');

                try {

                    const  response = await fetch(`${backendUrl}/api/v1/auth/naver`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ code, state: urlState }),
                    });

                    if (!response.ok) {
                        throw new Error('Failed to exchange authorization code');
                    }

                    // Parse the result from the backend (includes accessToken, refreshToken, user info)
                    const result = await response.json();
                    const { accessToken, idToken, user, isNewcomer } = result;

                    // store tokens in session storage
                    sessionStorage.setItem('accessToken', accessToken);
                    sessionStorage.setItem('idToken', idToken);

                    // update recoil state
                    setAuthState({
                        isAuthenticated: true,
                        user: user,
                        accessToken: accessToken,
                        idToken: idToken,
                        isNewcomer: isNewcomer,
                    });

                    // Redirect based on whether the user is a newcomer
                    if (isNewcomer){
                        navigate('/basic/nickname');
                    } else {
                        navigate('/main');
                    }
                } catch (error) {
                    console.error('Error during Naver loginf: ', error);
                    navigate('/login');
                }
            } else {
                navigate('/login');
            }
        };

        handleNaverLogin();
    },[navigate, setAuthState]);

    return <LandingPage />;
};

export default NaverLoginHandler;
