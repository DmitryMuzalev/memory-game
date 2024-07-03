import styles from "./History.module.scss";

import { useDispatch } from "react-redux";

import { FaArrowLeftLong, FaPuzzlePiece, FaListOl } from "react-icons/fa6";
import { Button } from "../UI/Button/Button";
import { changeStatus } from "../../features/Game/game-slice";

function History() {
  const dispatch = useDispatch();

  return (
    <div className={styles.history}>
      <div className={styles.historyCTA}>
        <Button
          isCircle
          type="primary"
          cb={() => dispatch(changeStatus("setting"))}
        >
          <FaArrowLeftLong />
        </Button>
        <Button>Clear</Button>
      </div>
      <div className={styles.historyEmpty}>
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
export { History };
