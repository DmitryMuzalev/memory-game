import styles from "./Game.module.scss";
import { GameHeader } from "../GameHeader/GameHeader";
import { useSelector } from "react-redux";
import { getSettings } from "../../features/Settings/settings-slice";
import { GameField } from "../../features/GameField/GameField";
import { Player } from "../../features/Player/Player";
import { Multiplayer } from "../Multiplayer/Multiplayer";

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
