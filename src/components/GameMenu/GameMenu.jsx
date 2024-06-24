import { Button } from "../Button/Button";
import styles from "./GameMenu.module.scss";

function GameMenu() {
  return (
    <div className={styles.gameMenu}>
      <Button type="primary">restart</Button>
      <Button type="secondary">new game</Button>
      <Button type="secondary">resume game</Button>
    </div>
  );
}
export { GameMenu };
