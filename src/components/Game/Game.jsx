import styles from "./Game.module.scss";
import { GameHeader } from "../GameHeader/GameHeader";
import { GameFooter } from "../GameFooter/GameFooter";
import { GameField } from "../GameField/GameField";

function Game() {
  return (
    <div className={styles.game}>
      <GameHeader />
      <GameField />
      <GameFooter />
    </div>
  );
}
export { Game };
