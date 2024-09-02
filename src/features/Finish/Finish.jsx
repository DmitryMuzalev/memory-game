import styles from './Finish.module.scss';

import { useSelector } from 'react-redux';

import { ModalWindow } from '../../components/UI/ModalWindow/ModalWindow';
import { ResetGame, RestartGame } from '../../components/Buttons/Buttons';
import { FinishSingleMode } from './FinishSingleMode';
import { FinishMultiplayerMode } from './FinishMultiplayerMode';

function Finish() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <ModalWindow>
      {playersQuantity === 1 ? <FinishSingleMode /> : <FinishMultiplayerMode />}
      <div className={styles.finishButtons}>
        <RestartGame />
        <ResetGame />
      </div>
    </ModalWindow>
  );
}

export { Finish };
