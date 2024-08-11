import { useSelector } from 'react-redux';

import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { StartMenu } from './components/StartMenu/StartMenu';
import { Game } from './features/Game/Game';

import { getStatus } from './features/Game/game-slice';
import { History } from './features/History/History';

function App() {
  const gameIsRunning = useSelector(getStatus);
  const isShowHistory = useSelector((state) => state.history);

  return (
    <div className="app">
      {gameIsRunning ? (
        <Game />
      ) : (
        <Wrapper>{isShowHistory ? <History /> : <StartMenu />}</Wrapper>
      )}
    </div>
  );
}

export default App;
