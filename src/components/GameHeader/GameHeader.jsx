import { useMediaQuery } from "react-responsive";
import { Button } from "../UI/Button/Button";
import { Logo } from "../UI/Logo/Logo";
import styles from "./GameHeader.module.scss";

function GameHeader() {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  return (
    <header className={styles.gameHeader}>
      <Logo />
      <div className={styles.gameHeaderBtns}>
        {isMobile ? (
          <Button type="primary">menu</Button>
        ) : (
          <>
            <Button type="primary">restart</Button>
            <Button type="secondary">new game</Button>
          </>
        )}
      </div>
    </header>
  );
}
export { GameHeader };
