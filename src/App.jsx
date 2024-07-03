import { useSelector } from "react-redux";
import { Game } from "./features/Game/Game";

import { StartMenu } from "./components/StartMenu/StartMenu";
import { getStatus } from "./features/Game/game-slice";

function App() {
  const statusGame = useSelector(getStatus);
  return (
    <div className="app">
      {statusGame === "running" ? <Game /> : <StartMenu />}
    </div>
  );
}

export default App;
