import styles from "./MainMenu.module.scss";

import { Logo } from "../UI/Logo/Logo";
import { useSelector } from "react-redux";

import { History } from "../../features/History/History";
import { StartMenu } from "../StartMenu/StartMenu";

function MainMenu() {
  const isShowHistory = useSelector((state) => state.history);

  return (
    <div className={styles.mainMenu}>
      <Logo style="light" />
      <div className={styles.mainMenuContent}>
        {isShowHistory ? <History /> : <StartMenu />}
      </div>
    </div>
  );
}
export { MainMenu };
