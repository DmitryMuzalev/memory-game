import styles from "./Header.module.scss";

import { useMediaQuery } from "react-responsive";

import { Logo } from "../UI/Logo/Logo";
import { Button } from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { showMenu } from "../../features/Menu/menu-slice";
import { ResetGame, RestartGame } from "../Buttons/Buttons";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderCTA />
    </header>
  );
}

function HeaderCTA() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });

  const dispatch = useDispatch();

  return (
    <div className={styles.headerCTA}>
      {isMobile ? (
        <Button type="primary" cb={() => dispatch(showMenu())}>
          menu
        </Button>
      ) : (
        <>
          <RestartGame />
          <ResetGame />
        </>
      )}
    </div>
  );
}

export { Header };
