import styles from './History.module.scss';
import { FaArrowLeftLong, FaPuzzlePiece, FaListOl } from 'react-icons/fa6';

import { useDispatch } from 'react-redux';
import { changeStatus } from '../../features/Game/game-slice';

import { Button } from '../UI/Button/Button';

function History() {
  return (
    <div className={styles.history}>
      <HistoryCTA />
      <HistoryEmpty />
    </div>
  );
}

function HistoryCTA() {
  const dispatch = useDispatch();
  return (
    <div className={styles.historyCTA}>
      <Button
        isCircle
        type="primary"
        cb={() => dispatch(changeStatus('setting'))}
      >
        <FaArrowLeftLong />
      </Button>
      <Button>Clear</Button>
    </div>
  );
}

function HistoryEmpty() {
  return (
    <div className={styles.historyEmpty}>
      <p>
        <FaPuzzlePiece />
        You don&apos;t have any previous games
      </p>
      <p>
        <FaListOl />
        Your game scores will be listed here
      </p>
    </div>
  );
}

export { History };
