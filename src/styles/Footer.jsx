import React from "react";
import styled from "styled-components";

const FooterTitle = styled.h2`
  margin-bottom: 1.67vw;
  margin-left: 5.2vw;
  font-family: "Pretendard-Medium";
  font-size: 0.93vw;
  color: white;
`;
const FooterText = styled.h3`
  margin-bottom: 0.57vw;
  font-family: "Pretendard-Medium";
  font-size: 0.93vw;
  margin-left: 5.2vw;
  color: white;
  display: flex;
  color: #787878;
`;
const FooterText2 = styled.h4`
  font-family: "Pretendard-Medium";
  font-size: 0.93vw;
  margin-left: 5.2vw;
  text-align: center;
  color: white;
  display: flex;
  color: #787878;
`;

const FooterTitleContainer = styled.div`
  position: absolute;
  bottom: 3.95vw;
`;

const FooterTitleContainer2 = styled.div`
  left: 23vw;
  position: absolute;
  bottom: 3.95vw;
`;
const FooterTitleContainer3 = styled.div`
  left: 58.8vw;
  position: absolute;
  bottom: 3.95vw;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* 각 컨테이너가 위쪽에 정렬되도록 */
`;

const HorizontalLine = styled.hr`
  position: absolute;
  bottom: 9.68vw;
  border: none;
  border-top: 1px solid #2b2b2b;
  margin: 20px 0;
  width: 89%; /* 너비 조정 */
  left: 50%; /* 부모의 가운데 위치로 이동 */
  transform: translateX(-50%); /* 정확히 가운데 정렬 */
`;

export const FooterComponent = () => {
  return (
    <>
      <HorizontalLine />
      <FooterTitleContainer>
        <FooterTitle>WAGWAG 와그와그</FooterTitle>
        <FooterText>서울 강남구 선릉로 428 4층</FooterText>
        <FooterText2>Copyright ©와그와그</FooterText2>
      </FooterTitleContainer>
      <FooterTitleContainer2>
        <FooterTitle>Member</FooterTitle>
        <RowContainer>
          <div>
            <FooterText>Frontend</FooterText>
            <FooterText2 style={{ color: "#C1C1C1" }}>
              조용주, 이지영, 고은진, 윤준수
            </FooterText2>
          </div>
          <div>
            <FooterText>Backend</FooterText>
            <FooterText2 style={{ color: "#C1C1C1" }}>
              원동현, 조계원, 심승보
            </FooterText2>
          </div>
        </RowContainer>
      </FooterTitleContainer2>
      <FooterTitleContainer3>
        <FooterTitle>문의하기</FooterTitle>
        <FooterText>wagwagdevelop@naver.com</FooterText>
        <FooterText2>.</FooterText2>
      </FooterTitleContainer3>
    </>
  );
};
