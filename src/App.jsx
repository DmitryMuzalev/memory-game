import { useSelector } from "react-redux";

import { Wrapper } from "./components/UI/Wrapper/Wrapper";
import { StartMenu } from "./components/StartMenu/StartMenu";
import { Game } from "./features/Game/Game";

import { History } from "./features/History/History";

function App() {
  const gameIsRun = useSelector((state) => state.game.isRun);
  const isShowHistory = useSelector((state) => state.history);

  return (
    <div className="app">
      {gameIsRun ? (
        <Game />
      ) : (
        <Wrapper>{isShowHistory ? <History /> : <StartMenu />}</Wrapper>
      )}
    </div>
  );
}

export default App;
