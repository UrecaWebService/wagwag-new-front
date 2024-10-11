// src/components/BasicSettingCategory.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from '../assets/wagwagLogo.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userAtoms } from '../recoil/userAtoms.jsx';
import { newComerAtoms } from "../recoil/userAtoms.jsx";
import categoryData from "../categoryData.json";

const BasicSettingCategory = () => {
    const navigate = useNavigate();
    const [userState, setUserState] = useRecoilState(userAtoms);
    const [newComerState, setNewComerState] = useRecoilState(newComerAtoms);
    const nickname = newComerState.userNickName;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleCategory = (category) => {
        const { userCategory } = newComerState;
        if (userCategory.includes(category)) {
            setNewComerState((prevState) => ({
                ...prevState,
                userCategory: prevState.userCategory.filter(item => item !== category),
            }));
        } else if (userCategory.length < 3) {
            setNewComerState((prevState) => ({
                ...prevState,
                userCategory: [...prevState.userCategory, category],
            }));
        }
    };

    const isCategorySelected = (category) => newComerState.userCategory.includes(category);

    const handleSaveButtonClick = async () => {
        if (newComerState.userCategory.length === 3) {
            setIsLoading(true);
            setError(null);

            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL;

                const { idToken, accessToken } = userState;

                const response = await fetch(`${backendUrl}/api/v1/users/modify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`, 
                    },
                    body: JSON.stringify({
                        userId: idToken,
                        nickname: newComerState.userNickName,
                        userRegion: newComerState.userRegion,
                        userCategory: newComerState.userCategory,
                    }),
                });

                if (!response.ok) {
                    // 서버에서 에러 응답을 보낸 경우
                    const errorData = await response.json();
                    throw new Error(errorData.message || '설정 완료에 실패했습니다.');
                }

                navigate('/main');
            } catch (err) {
                console.error('설정 완료 오류:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <Wrapper>
            <LogoImg />
            <SettingTitle>{nickname}님이 관심있는 주제를 알려주세요</SettingTitle>
            <SettingSubTitle>
                <ColorText>*</ColorText> 내 취향에 맞는 와글을 더 편리하게 볼 수 있어요
            </SettingSubTitle>
            <CategoryList>
                {categoryData.map((category, index) => (
                    <CategoryItem
                        key={index}
                        onClick={() => toggleCategory(category)}
                        selected={isCategorySelected(category)}
                        aria-pressed={isCategorySelected(category)}
                    >
                        {category}
                    </CategoryItem>
                ))}
            </CategoryList>
            <DoneButton
                onClick={handleSaveButtonClick}
                disabled={newComerState.userCategory.length !== 3 || isLoading}
            >
                {isLoading ? '완료 중...' : '완료'}
            </DoneButton>
            <NavWrapper>
                <NavItem />
                <NavItem />
                <NavItem style={{ backgroundColor: '#D9D9D9' }} />
            </NavWrapper>
        </Wrapper>
    );
}

export default BasicSettingCategory;

// Styled components
const Wrapper = styled.div`
    font-family: "Pretendard-Medium";

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    top: 3.4vw;
    left: 3.6vw;
    position: absolute;
    width: 9.2vw;
    height: 1.5vw;
  `;

const SettingTitle = styled.h1`
    font-family: "Pretendard-Medium";
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1.35vw;
    top: 12vw;
`;

const SettingSubTitle = styled.p`
    position: absolute;
    text-align: center;
    color: #898989;
    font-size: 1vw;
    top: 14.2vw;
`;

const ColorText = styled.span`
    color: #57F98E;
`

const CategoryList = styled.div`
    
    position: absolute;
    top: 22vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 25.3vw;
`;

const CategoryItem = styled.div`
    width: auto;
    color: ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border: solid ${({ selected }) => (selected ? '#57F98E' : '#898989')};
    border-radius: 50vw;
    padding: 1vw 2.5vw;
    margin-bottom: 2vw;
    font-size: 1.1vw;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const DoneButton = styled.button`
    position: absolute;
    top: 43.4vw;
    width: 7vw;
    height: 3.4vw;
    background-color: white;
    color: #080808;
    font-family: "Pretendard-Medium";
    border-radius: 0.8vw;
    border: 1px solid #787878;
    transition: 0.5s ease;
    text-align: center;
    font-size: 1.14vw;
    cursor: pointer;

    &:disabled {
        background-color: #898989;
        cursor: default;

    }
`;

const NavWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: 50vw;
`;

const NavItem = styled.div`
    position: relative;
    width: 2.4vw;
    padding: 0.1vw;
    display: flex;
    margin: 0.5vw;
    background: ${(props) => (props.active ? "#D9D9D9" : "#474747")};
    justify-content: space-around;
    border-radius: 5px;
`;