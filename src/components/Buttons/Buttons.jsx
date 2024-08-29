import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../UI/Button/Button';
import { resetToDefault } from '../../utils/root-actions';
import {
  loadCards,
  restartGame,
  startGame,
} from '../../features/Game/game-slice';

function ResetGame() {
  const dispatch = useDispatch();
  return (
    <Button type="secondary" cb={() => dispatch(resetToDefault())}>
      new game
    </Button>
  );
}

function RestartGame() {
  const dispatch = useDispatch();
  const { grid } = useSelector((state) => state.settings);
  return (
    <Button
      type="primary"
      cb={() => {
        dispatch(restartGame());
        setTimeout(() => dispatch(loadCards(grid)), 350);
      }}
    >
      restart
    </Button>
  );
}

function ResumeGame() {
  const dispatch = useDispatch();
  return (
    <Button type="secondary" cb={() => dispatch(startGame())}>
      resume game
    </Button>
  );
}

export { ResetGame, RestartGame, ResumeGame };
