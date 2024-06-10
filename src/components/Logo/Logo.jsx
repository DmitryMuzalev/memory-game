import styles from "./Logo.module.scss";
import darkLogo from "../../assets/images/logo-dark.svg";
import lightLogo from "../../assets/images/logo-light.svg";

function Logo({ style = "dark" }) {
  return (
    <div className={styles.logo}>
      <img
        src={style === "dark" ? darkLogo : lightLogo}
        alt="Logo game Memory"
      />
    </div>
  );
}
export { Logo };
