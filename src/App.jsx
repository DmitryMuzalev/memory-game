import { useSelector } from "react-redux";

import { Game } from "./features/Game/Game";
import { MainMenu } from "./components/MainMenu/MainMenu";

function App() {
  const gameIsRun = useSelector((state) => state.game.isRun);

  return <div className="app">{gameIsRun ? <Game /> : <MainMenu />}</div>;
}

export default App;
