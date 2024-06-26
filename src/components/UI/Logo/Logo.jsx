import darkLogo from "../../../assets/images/logo-dark.svg";
import lightLogo from "../../../assets/images/logo-light.svg";

function Logo({ style = "dark" }) {
  return (
    <img src={style === "dark" ? darkLogo : lightLogo} alt="Logo game Memory" />
  );
}
export { Logo };
