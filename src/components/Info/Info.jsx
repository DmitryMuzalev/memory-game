import styles from './Info.module.scss';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getSettings } from '../../features/Settings/settings-slice';

import { timeFormatter } from '../../utils/time-formatter';

import { InfoBlock } from '../UI/InfoBlock/InfoBlock';
import { getCurrentPlayer } from '../../features/Game/game-slice';

function Info() {
  const { playersQuantity } = useSelector(getSettings);
  return (
    <div className={styles.info}>
      {playersQuantity === 1 ? <PlayerMode /> : <MultiplayerMode />}
    </div>
  );
}

function PlayerMode() {
  return (
    <>
      <Timer />
      <InfoBlock label="movies" value="0" />
    </>
  );
}

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timeId);
  }, []);

  return <InfoBlock label="time" value={timeFormatter(time)} />;
}

function MultiplayerMode() {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  const currentPlayer = useSelector(getCurrentPlayer);

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
