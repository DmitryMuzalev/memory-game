import { useState } from 'react';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import styles from './GameFooter.module.scss';
import { PlayerStats } from '../PlayerStats/PlayerStats';

function GameFooter() {
  const [isOnePlayerMode, setOnePlayerMode] = useState(false);
  return (
    <footer className={styles.gameFooter}>
      {isOnePlayerMode ? (
        <>
          <InfoBlock label="time" value="0:00" />
          <InfoBlock label="movies" value="0" />
        </>
      ) : (
        <>
          <PlayerStats name="Player 1" score={2} />
          <PlayerStats name="Player 1" score={0} isActive />
          <PlayerStats name="Player 1" score={1} />
          <PlayerStats name="Player 1" score={1} />
        </>
      )}
    </footer>
  );
}
export { GameFooter };
