import styles from "./Finish.module.scss";

import { useSelector } from "react-redux";

import { timeFormatter } from "../../utils/time-formatter";

import { InfoBlock } from "../../components/UI/InfoBlock/InfoBlock";

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

export { FinishPlayerMode };