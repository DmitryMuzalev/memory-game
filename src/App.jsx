import { useSelector } from 'react-redux';

import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { StartMenu } from './components/StartMenu/StartMenu';
import { History } from './components/History/History';
import { Game } from './features/Game/Game';

import { getStatus } from './features/Game/game-slice';

function App() {
  const statusGame = useSelector(getStatus);
  return (
    <div className="app">
      {statusGame !== 'running' ? (
        <Wrapper>
          {(statusGame === 'history' && <History />) ||
            (statusGame === 'setting' && <StartMenu />)}
        </Wrapper>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
