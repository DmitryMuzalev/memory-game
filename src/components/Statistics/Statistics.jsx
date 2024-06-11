import { Button } from "../Button/Button";
import styles from "./Statistics.module.scss";
import { FaArrowLeftLong, FaPuzzlePiece, FaListOl } from "react-icons/fa6";

function Statistics() {
  return (
    <div className={styles.statistics}>
      <div className={styles.statisticsCTA}>
        <Button isCircle type="primary">
          <FaArrowLeftLong />
        </Button>
        <Button>Clear</Button>
      </div>
      <div className={styles.statisticsEmpty}>
        <p>
          <FaPuzzlePiece />
          You don&apos;t have any previous games
        </p>
        <p>
          <FaListOl />
          Your game scores will be listed here
        </p>
      </div>
    </div>
  );
}
export { Statistics };
