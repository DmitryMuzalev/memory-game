import styles from './Menu.module.scss';

import { Button } from '../../components/UI/Button/Button';
import { ModalWindow } from '../../components/UI/ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { resetToDefault } from '../../utils/root-actions';
import { restartGame, resumeGame } from '../Game/game-slice';

function Menu() {
  const dispatch = useDispatch();

  return (
    <ModalWindow>
      <div className={styles.menu}>
        <Button
          type="primary"
          cb={() => {
            dispatch(restartGame());
          }}
        >
          restart
        </Button>
        <Button
          type="secondary"
          cb={() => {
            dispatch(resetToDefault());
          }}
        >
          new game
        </Button>
        <Button type="secondary" cb={() => dispatch(resumeGame())}>
          resume game
        </Button>
      </div>
    </ModalWindow>
  );
}

export { Menu };
