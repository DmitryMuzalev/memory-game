import { useState } from "react";
import styles from "./GameFinish.module.scss";
import { Button } from "../UI/Button/Button";
import { InfoBlock } from "../UI/InfoBlock/InfoBlock";
import { ModalWindow } from "../UI/ModalWindow/ModalWindow";
import { useMediaQuery } from "react-responsive";

function GameFinish() {
  const [isOnePlayerMode, setOnePlayerMode] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  return (
    <ModalWindow>
      <div className={styles.gameFinish}>
        {isOnePlayerMode ? (
          <>
            <h2 className={styles.gameFinishTitle}>You did it!</h2>
            <p className={styles.gameFinishSubtitle}>
              Game over! Here’s how you got on...
            </p>
            <div className={styles.gameFinishStat}>
              <InfoBlock label="Time Elapsed" value={"0:33"} />
              <InfoBlock label="Moves Taken" value={28} />
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.gameFinishTitle}>{`Player ${1} Wins!`}</h2>
            <p className={styles.gameFinishSubtitle}>
              Game over! Here are the results...
            </p>
            <div className={styles.gameFinishStat}>
              <InfoBlock
                label="Player 1 (Winner!)"
                value={isMobile ? 5 : `${5} Pairs`}
                isActive
              />
              <InfoBlock label="Player 2" value={isMobile ? 3 : `${3} Pairs`} />
            </div>
          </>
        )}
        <div className={styles.gameFinishButtons}>
          <Button type="primary">restart</Button>
          <Button type="secondary">new game</Button>
        </div>
      </div>
    </ModalWindow>
  );
}
export { GameFinish };
