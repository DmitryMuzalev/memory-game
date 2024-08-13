import styles from "./Menu.module.scss";

import { ModalWindow } from "../../components/UI/ModalWindow/ModalWindow";

import {
  ResetGame,
  RestartGame,
  ResumeGame,
} from "../../components/Buttons/Buttons";

function Menu() {
  return (
    <ModalWindow>
      <div className={styles.menu}>
        <RestartGame />
        <ResetGame />
        <ResumeGame />
      </div>
    </ModalWindow>
  );
}

export { Menu };
