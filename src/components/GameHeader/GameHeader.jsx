import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import styles from "./GameHeader.module.scss";

function GameHeader() {
  return (
    <header className={styles.gameHeader}>
      <Logo />
      <div className={styles.gameHeaderBtns}>
        <Button type="primary">restart</Button>
        <Button type="default">new game</Button>
      </div>
    </header>
  );
}
export { GameHeader };
