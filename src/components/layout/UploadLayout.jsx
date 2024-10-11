// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import settingBg from "../../assets/uploadBack.png";
import styled from 'styled-components';
import logoImage from "../../assets/wagwagLogo.png";
import UploadIcon from "../../assets/UploadIcon.png";
import HomeIcon from "../../assets/HomeIcon.png";
import MapIcon from "../../assets/MapIcon.png";
import SearchIcon from "../../assets/SearchIcon.png";
import SettingIcon from "../../assets/SettingIcon.png";
import {SideBarComponent} from "../../styles/SideBar.jsx";
import {FooterComponent} from "../../styles/Footer.jsx";





const UploadLayout = () => {

    const SettingBackImages = styled.div` //네이버로고
        width: 100%;
        height: 100vh;
        background-image: url(${settingBg});
        background-size: cover;       // 이미지를 화면 크기에 맞게 조절
        background-position: center;  // 이미지를 중앙에 위치시킴
        background-repeat: no-repeat; // 이미지가 반복되지 않도록 설정
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;    // 다른 요소들이 이미지 위에 오도록 설정
        margin: 0;
        padding: 0;
    `;


    return (
        <SettingBackImages>
            <SideBarComponent />
            <Outlet />
        </SettingBackImages>
    )
}

export default UploadLayout;