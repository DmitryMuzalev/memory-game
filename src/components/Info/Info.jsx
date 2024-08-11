import styles from './Info.module.scss';

import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { InfoBlock } from '../UI/InfoBlock/InfoBlock';
import { Timer } from '../../features/Timer/Timer';

import { getMovesCounter } from '../../features/Game/game-slice';

function Info() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <div className={styles.info}>
      {playersQuantity === 1 ? <PlayerMode /> : <MultiplayerMode />}
    </div>
  );
}

function PlayerMode() {
  const movesCounter = useSelector(getMovesCounter);
  return (
    <>
      <Timer />
      <InfoBlock label="moves" value={movesCounter} />
    </>
  );
}

function MultiplayerMode() {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  const currentPlayer = 0;

  const players = [
    { id: 1, points: 2 },
    { id: 2, points: 1 },
    { id: 3, points: 4 },
    { id: 4, points: 0 },
  ];

  return (
    <>
      {players.map((player) => {
        return (
          <InfoBlock
            key={player.id}
            type="player"
            label={isMobile ? `P${player.id}` : `Player ${player.id}`}
            value={player.points}
            isActive={currentPlayer === player.id}
          />
        );
      })}
    </>
  );
}

export { Info };
