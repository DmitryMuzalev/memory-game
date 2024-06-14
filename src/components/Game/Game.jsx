import styles from "./Game.module.scss";
import { GameHeader } from "../GameHeader/GameHeader";
import { GameFooter } from "../GameFooter/GameFooter";

function Game() {
  return (
    <div className={styles.game}>
      <GameHeader />
      <GameFooter />
    </div>
  );
}
export { Game };
