import styles from './Finish.module.scss';

import { useSelector } from 'react-redux';

import { timeFormatter } from '../../utils/time-formatter';

import { InfoBlock } from '../../components/UI/InfoBlock/InfoBlock';
import { useEffect } from 'react';
import { updateLocalStorage } from '../../utils/use-local-storage';

function FinishSingleMode() {
  const { timer, moves } = useSelector((state) => state.singleMode);
  const { grid } = useSelector((state) => state.settings);
  const time = timeFormatter(timer.time);

  useEffect(() => {
    updateLocalStorage('singleMode', { grid, time, moves });
  }, [grid, time, moves]);

  return (
    <>
      <h2 className={styles.finishTitle}>You did it!</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here’s how you got on...
      </p>
      <div className={styles.finishStatistic}>
        <InfoBlock label="Time Elapsed" value={time} />
        <InfoBlock label="Moves Taken" value={moves} />
      </div>
    </>
  );
}

export { FinishSingleMode };
