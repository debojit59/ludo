import { useState } from "react";
import "./App.css";
import GameStart from "./components/GameStart";
import GameEntry from "./components/GameEntry";

function App() {
  const [gameStart, SetgameStart] = useState(false);

  const handleToogle = () => {
    SetgameStart((game) => !game);
  };
  return <>{gameStart ? <GameEntry /> : <GameStart Toogle={handleToogle} />}</>;
}

export default App;
