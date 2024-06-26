import styles from "./Game.module.scss";
import { GameHeader } from "../GameHeader/GameHeader";
import { GameFooter } from "../GameFooter/GameFooter";
import { GameField } from "../GameField/GameField";
import { GameFinish } from "../GameFinish/GameFinish";
import { GameMenu } from "../GameMenu/GameMenu";

function Game() {
  return (
    <div className={styles.game}>
      <GameHeader />
      <GameField />
      <GameFooter />

      {/* <GameMenu /> */}
      {/* <GameFinish /> */}
    </div>
  );
}
export { Game };
