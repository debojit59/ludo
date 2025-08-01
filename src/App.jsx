import { useState } from "react";
import styled from "styled-components";
import GameStart from "./components/GameStart";
import GameEntry from "./components/GameEntry";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleToggle = () => {
    setGameStart((prev) => !prev);
  };

  const handleCloseBanner = () => {
    setBannerVisible(false);
  };

  return (
    <>
      {bannerVisible ? (
        <FullScreenBanner>
          <BannerContent>
            <p>
              🚧 This website is under development. <br />
              Meanwhile, enjoy our Dice Game! 🎲
            </p>
            <CloseButton onClick={handleCloseBanner}>
              Enter Dice Game
            </CloseButton>
          </BannerContent>
        </FullScreenBanner>
      ) : (
        <>{gameStart ? <GameEntry /> : <GameStart Toogle={handleToggle} />}</>
      )}
    </>
  );
}

export default App;

// Styled-components
const FullScreenBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #ffefc1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const BannerContent = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #000;
  }
`;
