import { useSelector } from "react-redux";

import { Wrapper } from "./components/UI/Wrapper/Wrapper";
import { StartMenu } from "./components/StartMenu/StartMenu";
import { Game } from "./features/Game/Game";

import { getStatus } from "./features/Game/game-slice";
import { getHistory } from "./features/History/history-slice";
import { History } from "./features/History/History";

function App() {
  const statusGame = useSelector(getStatus);
  const isShowHistory = useSelector(getHistory);
  return (
    <div className="app">
      {statusGame !== "running" ? (
        <Wrapper>{isShowHistory ? <History /> : <StartMenu />}</Wrapper>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
