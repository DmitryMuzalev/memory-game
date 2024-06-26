import { useSelector } from "react-redux";
import { Game } from "./components/Game/Game";

import { StartMenu } from "./components/StartMenu/StartMenu";
import { getStatus } from "./features/Game/game-slice";

//import { Card } from "./components/Card/Card";
/* import { shuffleCards } from "./utils/shuffle-algorithm";
import { useEffect, useState } from "react"; */
//import { GameHeader } from "./components/GameHeader/GameHeader";
//import { InfoBlock } from "./components/InfoBlock/InfoBlock";

function App() {
  const statusGame = useSelector(getStatus);
  return (
    <div className="app">
      {statusGame === "running" ? <Game /> : <StartMenu />}
    </div>
  );
}

export default App;
