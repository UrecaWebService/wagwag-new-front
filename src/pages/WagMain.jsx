import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import UploadIcon from "../assets/UploadIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import MapIcon from "../assets/MapIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import SettingIcon from "../assets/SettingIcon.png";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { newComerAtoms } from "../recoil/userAtoms.jsx";
import { SideBarComponent } from "../styles/SideBar.jsx";
import { FooterComponent } from "../styles/Footer.jsx";
import LocationIcon from "../assets/TopBarIcon/Location.png";
import VideoIcon from "../assets/TopBarIcon/Video.png";
import RankingIcon from "../assets/TopBarIcon/Ranking.png";
import HotIcon from "../assets/TopBarIcon/Hot.png";
import StarIcon from "../assets/TopBarIcon/Star.png";

const BackGroundColor = styled.div`
    font-family: 'Pretendard-Medium';
    position: relative;
    background-color: #080808;
    width: 90vw;
    float: right;
    height: 159.21875vw;
`
const Topbar = styled.div`
    top: 2.9vw;
    display: flex;
    position: absolute;
    /* position: fixed; */
    width: 79.16vw;
    height: 4.16vw;
    border: 1.5px solid rgba(87, 249, 142, 0.3);
    border-radius: 1vw;
    background-color:rgba(8, 8, 8, 0.8);
    left: 50%;
    transform: translateX(-50%);
`
const LocationIconImg = styled.img.attrs({
    src: LocationIcon,
    alt: "",
})`
    left: 2.55vw;
    position: absolute;
    width: 1.35vw;
    height: 1.35vw;
    top:50%;
    transform: translateY(-50%);
    `;

const VideoIconImg = styled.img.attrs({
    src: VideoIcon,
    alt: "",
})`
    width: 1.09vw;
    height: 1.09vw;
    `;

const RankingIconImg = styled.img.attrs({
    src: RankingIcon,
    alt: "",
})`
    width: 0.62vw;
    height: 0.78vw;
    `;

const HotIconImg = styled.img.attrs({
    src: HotIcon,
    alt: "",
})`
    width: 0.62vw;
    height: 0.88vw;
    `;

const StarIconImg = styled.img.attrs({
    src: StarIcon,
    alt: "",
})`
    width: 0.93vw;
    height: 0.93vw;
    `;

const LocationText = styled.h1`
    font-family: 'Pretendard-Medium';
    margin-left: 4.32vw;
    display: flex;
    align-items: center;
    font-size: 1.14vw;
    color: white;
`
const Line = styled.div`
    width: 0.1vw;
    height: 1.04vw;
    background-color: #525252;
    margin-left: 0.98vw;
    margin-right: 2.7vw;
`
const LocationText2 = styled.h2`
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    color: white;
    margin-left: 0.42vw;
    margin-right: 0.52vw;
`;

const LocationText3 = styled.h3`
    font-family: 'Pretendard-Medium';
    font-size: 1.25vw;
    color: #57F98E;
`;

const LocationText4 = styled.h3`
    font-family: 'Pretendard-Medium';
    font-size: ${({ isBig }) => (isBig ? '1.04vw' : '0.93vw;')};
    color: ${({ isBig }) => (isBig ? '#57F98E' : '#57F98E')};
`;

const IconTextContainer = styled.div`
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    margin-right: 2.55vw;
`;


const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const CategoryButton = styled.button`
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 0.98vw;
    position: relative;
    margin-right: 0.83vw;
    width: ${({ isWide }) => (isWide ? '11.74vw' : '7.34vw')};
    height: 3.22vw;
    border: 1px solid #5E5E5E;
    background-color: #080808;
    border-radius: 10vw;
    top: 87.23vw;

    &:hover {
    cursor: pointer;
    color: #080808;
    background-color: white;
}
`
const Waggle = styled.div`
    width: 16.35vw;
    height: 21.71vw;
    margin-right: 1.04vw;
    border-radius: 1vw;
    background-color: #222222;
`
const WaggleComponent = styled.div`
    position: absolute;
    left: 5.2vw;
    top: 14.42vw;
    display: flex;
`

const WaggleTitle = styled.h3`
    font-family: 'Pretendard-Regular';
    font-size: 1.56vw;
    top: 11.3vw;
    left: 5.2vw;
    position: absolute;
    color: white;
`
const WaggleView = styled.h4`
    font-family: 'Pretendard-Regular';
    font-size: 0.93vw;
    /* position: absolute; */
    margin-right: 1.19vw;
    color: #A7A7A7;
`
const WaggleNickName = styled.h4`
    font-family: 'Pretendard-Regular';
    font-size: 0.93vw;
    color: #A7A7A7;
`
const WaggleLike = styled.h4`
    font-family: 'Pretendard-Regular';
    font-size: 0.93vw;
    /* position: absolute; */
    color: #A7A7A7;
`

export const WagMain = () => {
    const [newComerState, setNewComerState] = useRecoilState(newComerAtoms);
    console.log("this is what we have", newComerState);
    return (
        <>
            <BackGroundColor>
                <Topbar>
                    <LocationIconImg></LocationIconImg> <LocationText>서대문구 대현동<Line /></LocationText>
                    <IconTextContainer>
                        <VideoIconImg /> <LocationText2>오늘 올라온 영상 갯수</LocationText2><LocationText3>43</LocationText3>
                    </IconTextContainer>
                    <IconTextContainer>
                        <RankingIconImg /> <LocationText2>우리동네 와글 순위</LocationText2><LocationText3>2위</LocationText3>
                    </IconTextContainer>
                    <IconTextContainer>
                        <HotIconImg /> <LocationText2>우리동네 핫한 키워드</LocationText2><LocationText4 isBig>#버스킹</LocationText4>
                    </IconTextContainer>
                    <IconTextContainer>
                        <StarIconImg /> <LocationText2>인기 와글</LocationText2><LocationText4>4. 이대 앞 휘낭시에 여기가 대박임</LocationText4>
                    </IconTextContainer>
                </Topbar>
                <SideBarComponent />
                <WaggleTitle>서대문구 대현동 인기 와글</WaggleTitle>
                <WaggleComponent>
                    <Waggle>
                        <WaggleView>23.9K</WaggleView>
                        <WaggleNickName>SONNN</WaggleNickName>
                        <WaggleLike>12.6KK</WaggleLike>
                    </Waggle>
                    <Waggle></Waggle>
                    <Waggle></Waggle>
                    <Waggle></Waggle>
                    <Waggle></Waggle>
                </WaggleComponent>
                <CategoryContainer>
                    <CategoryButton>전체</CategoryButton>
                    <CategoryButton>운동</CategoryButton>
                    <CategoryButton>뷰티</CategoryButton>
                    <CategoryButton>일상생활</CategoryButton>
                    <CategoryButton>게임</CategoryButton>
                    <CategoryButton>음식</CategoryButton>
                    <CategoryButton>산책</CategoryButton>
                    <CategoryButton>노래</CategoryButton>
                    <CategoryButton isWide>타 지역 인기 와글</CategoryButton>
                </CategoryContainer>
                <FooterComponent />
            </BackGroundColor>
        </>
    )
}

export default WagMain;
