import { Button } from "../UI/Button/Button";
import { ModalWindow } from "../UI/ModalWindow/ModalWindow";
import styles from "./GameMenu.module.scss";

function GameMenu() {
  return (
    <ModalWindow>
      <div className={styles.gameMenu}>
        <Button type="primary">restart</Button>
        <Button type="secondary">new game</Button>
        <Button type="secondary">resume game</Button>
      </div>
    </ModalWindow>
  );
}
export { GameMenu };
