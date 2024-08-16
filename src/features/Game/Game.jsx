import styles from "./Game.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/Cards/Cards";
import { Info } from "../../components/Info/Info";
import { Finish } from "../Finish/Finish";
import { Menu } from "../Menu/Menu";
import { useEffect } from "react";
import { loadCards } from "./game-slice";

function Game() {
  const isFinish = useSelector((state) => state.finish);
  const isMenuOpen = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);

  return (
    <div className={styles.game}>
      <Header />
      <Cards />
      <Info />
      {isFinish && <Finish />}
      {isMenuOpen && <Menu />}
    </div>
  );
}
export { Game };
