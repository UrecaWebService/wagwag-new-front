// Detail.js
import styled from "styled-components";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoData from "../videodata.json";

// Import test videos
import testOne from '../assets/TestVideo/testOne.mp4';
import testTwo from '../assets/TestVideo/testTwo.mp4';
import testThree from '../assets/TestVideo/testThree.mp4';
import testFour from '../assets/TestVideo/testFour.mp4';

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

const WaggleInnerViewContainer = styled.div`
  z-index: 10;
  display: flex;
  margin-right: 3.473vh;
  position: absolute;
  top: 2.9vh;
`;

const WaggleProfileContainer = styled.div`
  position: absolute;
  top: 85.1vh;
  flex-direction: column;
  margin-left: 2.5vh;
  z-index: 1;
`;

const WaggleVideoContents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;
  overflow: hidden;
  position: relative;
`;

const WaggleSideContainer = styled.div`
  margin-left: 1.817vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 8.3734vh;
`;

const ArrowButton = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid ${({ disabled }) => (disabled ? '#3e3e3e' : '#5e5e5e')};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ direction }) => (direction === 'up' ? '1.5441vh' : '14.182vh')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ArrowIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 42px;
  color: ${({ disabled }) => (disabled ? '#3e3e3e' : '#525252')};
  &:hover {
    color: ${({ disabled }) => (disabled ? '#3e3e3e' : '#fff')};
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

const LikeIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 69px;
  height: 79px;
  color: #fff;
  gap: 5px;
  cursor: pointer;
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
  cursor: pointer;
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
  height: 32px;
  color: #fff;
  font-size: 26px;
`;

const Account = styled.div`
  width: 5.1vw;
  height: 26px;
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

const PlayPauseText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #fff;
  pointer-events: none;
`;

// Utility function to format views
const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'm';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k';
  } else {
    return views.toString();
  }
};

function Detail() {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(0);
  const [views, setViews] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Map video keys to imported videos
  const videoMapping = {
    testOne: testOne,
    testTwo: testTwo,
    testThree: testThree,
    testFour: testFour,
  };

  const videoSources = videoData.map((item) => videoMapping[item.videoKey]);

  // Callback ref to ensure ref is correctly assigned
  const setVideoRef = useCallback((node) => {
    videoRef.current = node;
  }, []);

  // Update like, share, views when video changes
  useEffect(() => {
    setLike(videoData[currentVideoIndex].liked);
    setShare(videoData[currentVideoIndex].shared);
    setViews(videoData[currentVideoIndex].videoView);
    setIsLiked(false);
    setIsPlaying(true); // Automatically play new video
  }, [currentVideoIndex]);

  // Handle play/pause state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Failed to play the video:", error);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentVideoIndex]);

  const handleLikeCount = () => {
    if (isLiked) return;
    setLike(like + 1);
    setIsLiked(true);
  };

  const handleShareCount = () => {
    setShare(share + 1);
  };

  const paginate = (newDirection) => {
    if (newDirection === -1 && currentVideoIndex === 0) return;
    if (newDirection === 1 && currentVideoIndex === videoSources.length - 1) return;
    setDirection(newDirection);
    setCurrentVideoIndex((prevIndex) => prevIndex + newDirection);
  };

  const handleVideoClick = () => {
    setIsPlaying((prev) => !prev);
    console.log(`Video clicked. isPlaying is now: ${!isPlaying}`);
  };

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
      <Wrapper>
        <IconContainer>
          <WaggleContainer>
            <WaggleViewContainer>
              <WaggleInnerViewContainer>
                <PlayIcon>play_arrow</PlayIcon>
                <View>{formatViews(views)}</View>
              </WaggleInnerViewContainer>
            </WaggleViewContainer>
            <WaggleVideoContents>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.video
                    key={currentVideoIndex}
                    src={videoSources[currentVideoIndex]}
                    autoPlay
                    loop
                    muted
                    ref={setVideoRef}
                    onClick={handleVideoClick}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2},
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                />
              </AnimatePresence>
              {/* Display play/pause text */}
              {/*<PlayPauseText>{isPlaying ? "Playing" : "Paused"}</PlayPauseText>*/}
            </WaggleVideoContents>
            <WaggleProfileContainer>
              <Account>{videoData[currentVideoIndex].account}</Account>
              <Title>{videoData[currentVideoIndex].mainTitle}</Title>
            </WaggleProfileContainer>
          </WaggleContainer>
          <WaggleSideContainer>
            <SideButtonCombinedContainer>
              <ArrowButton
                  direction="up"
                  onClick={() => paginate(-1)}
                  disabled={currentVideoIndex === 0}
              >
                <ArrowIcon disabled={currentVideoIndex === 0}>
                  arrow_upward
                </ArrowIcon>
              </ArrowButton>
              <ArrowButton
                  direction="down"
                  onClick={() => paginate(1)}
                  disabled={currentVideoIndex === videoSources.length - 1}
              >
                <ArrowIcon disabled={currentVideoIndex === videoSources.length - 1}>
                  arrow_downward
                </ArrowIcon>
              </ArrowButton>
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
