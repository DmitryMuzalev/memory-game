import { clsx } from "clsx";
import styles from "./Button.module.scss";

function Button({ children, cb = () => {}, type = "default" }) {
  const stylesForButton = clsx(
    styles.button,
    type === "default" && styles.buttonDefault,
    type === "primary" && styles.buttonPrimary
  );
  return (
    <button className={stylesForButton} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
