import { useState } from "react";
import styles from "./GameFinish.module.scss";

function GameFinish() {
  const [isOnePlayerMode, setOnePlayerMode] = useState(false);
  return (
    <div className={styles.gameFinish}>
      {isOnePlayerMode ? (
        <>
          <h2 className={styles.gameFinishTitle}>You did it!</h2>
          <p className={styles.gameFinishSubtitle}>
            Game over! Here’s how you got on...
          </p>
          <div className={styles.gameFinishStat}></div>
        </>
      ) : (
        <>
          <h2 className={styles.gameFinishTitle}>{`Player ${1} Wins!`}</h2>
          <p className={styles.gameFinishSubtitle}>
            Game over! Here are the results...
          </p>
        </>
      )}
    </div>
  );
}
export { GameFinish };
