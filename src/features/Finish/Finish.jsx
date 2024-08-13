import styles from "./Finish.module.scss";

import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";
import { ModalWindow } from "../../components/UI/ModalWindow/ModalWindow";

import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import { timeFormatter } from "../../utils/time-formatter";
import { ResetGame, RestartGame } from "../../components/Buttons/Buttons";

function Finish() {
  const { playersQuantity } = useSelector((state) => state.settings);
  return (
    <ModalWindow>
      {playersQuantity === 1 ? <FinishPlayerMode /> : <FinishMultiplayerMode />}
      <div className={styles.finishButtons}>
        <RestartGame />
        <ResetGame />
      </div>
    </ModalWindow>
  );
}

function FinishPlayerMode() {
  const { timer, moves } = useSelector((state) => state.playerMode);
  return (
    <>
      <h2 className={styles.finishTitle}>You did it!</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here’s how you got on...
      </p>
      <div className={styles.finishStatistic}>
        <InfoBlock label="Time Elapsed" value={timeFormatter(timer.time)} />
        <InfoBlock label="Moves Taken" value={moves} />
      </div>
    </>
  );
}

function FinishMultiplayerMode() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  return (
    <>
      <h2 className={styles.finishTitle}>{`Player ${1} Wins!`}</h2>
      <p className={styles.finishSubtitle}>
        Game over! Here are the results...
      </p>
      <div className={styles.finishStatistic}>
        <InfoBlock
          label="Player 1 (Winner!)"
          value={isMobile ? 5 : `${5} Pairs`}
          isActive
        />
        <InfoBlock label="Player 2" value={isMobile ? 3 : `${3} Pairs`} />
      </div>
    </>
  );
}

export { Finish };
