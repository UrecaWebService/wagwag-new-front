import styled from "styled-components";
import data from "../data.json";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 9.167vh;
  width: 100vw;
  height: 100vh;
`;
const IconContainer = styled.div`
  display: flex;
  min-width: 500px;
  font-family: "Pretendard";
  width: 64.464vh;
  height: 100vh;
`;
const WaggleContainer = styled.div`
  min-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 56.091vh;
  height: 100%;
  background: #222222;
`;

const WaggleViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
`
const WaggleInnerViewContainer = styled.div`
  display: flex;
  margin-right: 3.473vh;
  position: absolute;
  top: 2.9vh;
  
`
const WaggleProfileContainer = styled.div`
  position: absolute;
  top: 85.1vh;
  flex-direction: column;
  margin-left: 2.5vh;
`
const WaggleVideoContents = styled.div`
  
`

const WaggleSideContainer = styled.div`
  margin-left: 1.817vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 8.3734vh;
`

const ArrowUpButton = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #5e5e5e;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5441vh;
`;
const ArrowUpIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 2.23vw;
  color: #525252;
  &:hover {
    color: #fff;
  }
`;
const SideButtonCombinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
`;

const SideButtonBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 8.1374vh;
`;

//156.85
const ArrowDownIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 2.23vw;
  color: #525252;
  &:hover {
    color: #fff;
  }
`;
const ArrowDownButton = styled.div`
  margin-top: 1.5441vh;
  margin-bottom: 14.182vh;
  width: 70px;
  height: 70px;
  border: 1px solid #5e5e5e;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LikeIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 69px;
  height: 79px;

  color: #fff;
  gap: 5px;
`;
const LikeIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  display: flex;
  justify-content: center;
  font-size: 43px;
`;
const LikeCount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 19px;
`;
const ShareIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 69px;
  height: 79px;

  color: #fff;
  gap: 5px;
`;
const ShareIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  display: flex;
  justify-content: center;
  font-size: 43px;
`;
const ShareCount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 19px;
`;
const PlayIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 30px;
  color: #fff;
  padding-right: 0.2vw;
`;
const View = styled.div`
  width: 71px;
  height: 1.56vw;
  color: #fff;
  font-size: 26px;
`;
const Account = styled.div`
  width: 5.1vw;
  height: 1.3vw;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
const Title = styled.div`
  margin-top: 2.4vh;
  width: 33vh;
  height: 2.56vh;
  color: #fff;
  font-size: 22px;
`;
function Detail() {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const dummyData = data[0];
  useEffect(() => {
    setLike(dummyData.liked);
    setShare(dummyData.shared);
  }, []);

  const handleLikeCount = () => {
    if (isLiked) {
      // 이미 좋아요 누른 경우 return
      return;
    }
    setLike(like + 1);
    setIsLiked(true);
  };
  const handleShareCount = () => {
    setShare(share + 1);
  };

  return (
    <Wrapper>
      <IconContainer>
        <WaggleContainer>
          <WaggleViewContainer>
            <WaggleInnerViewContainer>
              <PlayIcon>play_arrow</PlayIcon>
              <View>23.9K</View>
            </WaggleInnerViewContainer>
          </WaggleViewContainer>
          <WaggleProfileContainer>
            <WaggleVideoContents>

            </WaggleVideoContents>
            <Account>{dummyData.account}</Account>
            <Title>{dummyData.mainTitle}</Title>
          </WaggleProfileContainer>
        </WaggleContainer>
        <WaggleSideContainer>
          <SideButtonCombinedContainer>
            <ArrowUpButton>
              <ArrowUpIcon>arrow_upward</ArrowUpIcon>
            </ArrowUpButton>
            <ArrowDownButton>
              <ArrowDownIcon>arrow_downward</ArrowDownIcon>
            </ArrowDownButton>
            <SideButtonBottomContainer>
              <LikeIconContainer onClick={handleLikeCount}>
                <LikeIcon>favorite</LikeIcon>
                <LikeCount>{like}</LikeCount>
              </LikeIconContainer>
              <ShareIconContainer onClick={handleShareCount}>
                <ShareIcon>share</ShareIcon>
                <ShareCount>{share}</ShareCount>
              </ShareIconContainer>
            </SideButtonBottomContainer>
          </SideButtonCombinedContainer>


        </WaggleSideContainer>


     </IconContainer>
    </Wrapper>
  );
}

export default Detail;
