import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import UploadIcon from "../assets/UploadIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import MapIcon from "../assets/MapIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import SettingIcon from "../assets/SettingIcon.png";

// Styled components

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    top: 2.9vw;
    left: 1.3vw;
    position: absolute;
    width: 7.7vw;
    height: 1.3vw;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    position: absolute;
    top: 11.3vw;
    left: 4.3vw;
    &:hover {
        cursor: pointer;
    }
`;

// Updated UploadIconImg (wrapped inside a button for navigation)
const UploadIconImg = styled.img.attrs({
    src: UploadIcon,
    alt: "",
})`
    width: 1.77vw;
    height: 1.77vw;
`;

const HomeIconImg = styled.img.attrs({
    src: HomeIcon,
    alt: "",
})`
    top: 17vw;
    left: 4.3vw;
    position: absolute;
    width: 1.87vw;
    height: 1.7vw;
    &:hover {
        cursor: pointer;
    }
`;

const MapIconImg = styled.img.attrs({
    src: MapIcon,
    alt: "",
})`
    top: 22.8vw;
    left: 4.3vw;
    position: absolute;
    width: 1.77vw;
    height: 1.92vw;
    &:hover {
        cursor: pointer;
    }
`;

const SearchIconImg = styled.img.attrs({
    src: SearchIcon,
    alt: "",
})`
    top: 28.7vw;
    left: 4.3vw;
    position: absolute;
    width: 1.77vw;
    height: 1.77vw;
    &:hover {
        cursor: pointer;
    }
`;

const SettingIconImg = styled.img.attrs({
    src: SettingIcon,
    alt: "",
})`
    top: 34.5vw;
    left: 4.3vw;
    position: absolute;
    width: 1.87vw;
    height: 1.82vw;
    &:hover {
        cursor: pointer;
    }
`;

const ProfileImage = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 3.95vw;
    width: 2.91vw;
    height: 2.91vw;
    border-radius: 50%;
    background: ${(props) => (props.image ? `url(${props.image})` : "gray")};
    background-size: cover;
    background-position: center;
    &:hover {
        cursor: pointer;
    }
`;

const UserName = styled.h1`
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    position: absolute;
    width: 10vw;
    bottom: 3.95vw;
    text-align: center;
    color: white;
`;

const Sidebar = styled.div`
    position: relative;
    width: 10vw;
    height: 100vh;
    min-height: 910px;
    background-color: #080808;
    border-right: 1px solid #2B2B2B;
    position: fixed;
    top: 0;
    left: 0;
`;

export const SideBarComponent = () => {
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleUploadClick = () => {
        navigate("/user/dev"); // Navigate to the upload route
    };

    return (
        <Sidebar>
            <LogoImg />
            {/* Button for UploadIcon */}
            <IconButton onClick={handleUploadClick}>
                <UploadIconImg />
            </IconButton>
            <HomeIconImg />
            <MapIconImg />
            <SearchIconImg />
            <SettingIconImg />
            <ProfileImage />
            <UserName>waggle</UserName>
        </Sidebar>
    );
};
