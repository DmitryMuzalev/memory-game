import styles from "./Game.module.scss";
import { GameHeader } from "../GameHeader/GameHeader";
import { useSelector } from "react-redux";
import { getSettings } from "../../features/Settings/settings-slice";
import { Player } from "../Player/Player";
import { Multiplayer } from "../Multiplayer/Multiplayer";
import { GameField } from "../GameField/GameField";

function Game() {
  const { players } = useSelector(getSettings);
  return (
    <div className={styles.game}>
      <GameHeader />
      <GameField />

      {players === 1 ? <Player /> : <Multiplayer />}

      {/* <GameMenu /> */}
      {/* <GameFinish /> */}
    </div>
  );
}
export { Game };
