import styles from './Menu.module.scss';

import { Button } from '../UI/Button/Button';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';

function Menu() {
  return (
    <ModalWindow>
      <div className={styles.menu}>
        <Button type="primary">restart</Button>
        <Button type="secondary">new game</Button>
        <Button type="secondary">resume game</Button>
      </div>
    </ModalWindow>
  );
}
export { Menu };
