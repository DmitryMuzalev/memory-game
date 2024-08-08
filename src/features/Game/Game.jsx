import styles from "./Game.module.scss";

import { useSelector } from "react-redux";

import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/Cards/Cards";
import { Info } from "../../components/Info/Info";
import { Finish } from "../Finish/Finish";
import { getIsShowFinish } from "../Finish/finish-slice";

function Game() {
  const isFinish = useSelector(getIsShowFinish);

  return (
    <div className={styles.game}>
      <Header />
      <Cards />
      <Info />
      {isFinish && <Finish />}
      {/*  {gameStatus === "pause" && <Menu />} */}
    </div>
  );
}
export { Game };
