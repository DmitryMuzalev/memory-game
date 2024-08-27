import styles from "./History.module.scss";
import { FaArrowLeftLong, FaPuzzlePiece, FaListOl } from "react-icons/fa6";

import { useDispatch } from "react-redux";

import { toggleHistory } from "./history-slice";
import { Button } from "../../components/UI/Button/Button";

function History() {
  return (
    <div className={styles.history}>
      <HistoryCTA />
      {true ? <HistoryContent /> : <HistoryEmpty />}
    </div>
  );
}

function HistoryCTA() {
  const dispatch = useDispatch();
  return (
    <div className={styles.historyCTA}>
      <Button isCircle type="primary" cb={() => dispatch(toggleHistory())}>
        <FaArrowLeftLong />
      </Button>
      <Button>Clear</Button>
    </div>
  );
}

function HistoryEmpty() {
  return (
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
  );
}

function HistoryContent() {
  return (
    <div className={styles.historyContent}>
      <HistoryPlayerMode />
      <HistoryMultiplayerMode />
    </div>
  );
}

export { History };

function HistoryPlayerMode() {
  return (
    <div className={styles.historyContentBlock}>
      <h3 className={styles.historyContentTitle}>Player mode</h3>
      <h4 className={styles.historyContentSubtitle}>Grid 4x4</h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Time</th>
            <th>Movies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0:48</td>
            <td>33</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0:37</td>
            <td>34</td>
          </tr>
        </tbody>
      </table>
      <h4 className={styles.historyContentSubtitle}>Grid 6x6</h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Time</th>
            <th>Movies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0:48</td>
            <td>33</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0:37</td>
            <td>34</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function HistoryMultiplayerMode() {
  return (
    <div className={styles.historyContentBlock}>
      <h3 className={styles.historyContentTitle}>Multiplayer mode</h3>
      <h4 className={styles.historyContentSubtitle}>Grid 4x4</h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <h4 className={styles.historyContentSubtitle}>Grid 6x6</h4>
      <table className={styles.historyContentTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5</td>
            <td>3</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
