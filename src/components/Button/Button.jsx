import { clsx } from "clsx";
import styles from "./Button.module.scss";

function Button({
  children,
  cb = () => {},
  type = "default",
  isActive = false,
}) {
  const stylesForButton = clsx(
    styles.button,
    type === "primary" && styles.buttonPrimary,
    type === "secondary" && styles.buttonSecondary,
    type === "circle" && styles.buttonCircle,
    type === "default" && styles.buttonDefault,
    isActive && styles.buttonActive
  );
  return (
    <button className={stylesForButton} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
