import styles from './Finish.module.scss';

import { InfoBlock } from '../../components/UI/InfoBlock/InfoBlock';
import { ModalWindow } from '../../components/UI/ModalWindow/ModalWindow';
import { Button } from '../../components/UI/Button/Button';

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { getMovesCounter } from '../Game/game-slice';
import { timeFormatter } from '../../utils/time-formatter';

function Finish() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <ModalWindow>
      {playersQuantity === 1 ? <FinishPlayerMode /> : <FinishMultiplayerMode />}
      <div className={styles.finishButtons}>
        <Button type="primary">restart</Button>
        <Button type="secondary">new game</Button>
      </div>
    </ModalWindow>
  );
}

function FinishPlayerMode() {
  const movesCounter = useSelector(getMovesCounter);
  const time = useSelector((state) => state.timer.value);
  return (
    <>
      <h2 className={styles.finishTitle}>You did it!</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here’s how you got on...
      </p>
      <div className={styles.finishStatistic}>
        <InfoBlock label="Time Elapsed" value={timeFormatter(time)} />
        <InfoBlock label="Moves Taken" value={movesCounter} />
      </div>
    </>
  );
}

function FinishMultiplayerMode() {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  return (
    <>
      <h2 className={styles.finishTitle}>{`Player ${1} Wins!`}</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here are the results...
      </p>
      <div className={styles.finishStatistic}>
        <InfoBlock
          label="Player 1 (Winner!)"
          value={isMobile ? 5 : `${5} Pairs`}
          isActive
        />
        <InfoBlock label="Player 2" value={isMobile ? 3 : `${3} Pairs`} />
      </div>
    </>
  );
}

export { Finish };
