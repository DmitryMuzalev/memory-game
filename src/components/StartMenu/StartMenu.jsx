import styles from './StartMenu.module.scss';
import { FaChartLine } from 'react-icons/fa6';

import { useDispatch, useSelector } from 'react-redux';
import { loadCards, startGame } from '../../features/Game/game-slice';

import { Button } from '../UI/Button/Button';
import { Settings } from '../../features/Settings/Settings';
import { toggleHistory } from '../../features/History/history-slice';
import { useEffect } from 'react';
import { onSingleMode } from '../../features/SingleMode/single-mode-slice';
import { onMultiplayerMode } from '../../features/MultiplayerMode/multiplayer-mode-slice';

function StartMenu() {
  const dispatch = useDispatch();
  const { playersQuantity, grid } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(loadCards(grid));
  }, [dispatch, grid]);

  useEffect(() => {
    if (playersQuantity === 1) {
      dispatch(onSingleMode());
    } else {
      dispatch(onMultiplayerMode());
    }
  }, [dispatch, playersQuantity]);

  return (
    <div className={styles.startMenu}>
      <Settings />
      <StartMenuCTA />
    </div>
  );
}

function StartMenuCTA() {
  const dispatch = useDispatch();
  return (
    <div className={styles.startMenuCTA}>
      <Button type="primary" cb={() => dispatch(startGame())}>
        start game
      </Button>
      <Button isCircle cb={() => dispatch(toggleHistory())}>
        <FaChartLine />
      </Button>
    </div>
  );
}
export { StartMenu };
