import styles from "./Button.module.css";
import {Link} from "react-router-dom"

export default function NavbarSignInButton() {
  return (
    <>
    <Link to="/signin">
      <button className={styles.button}>Sign In</button>
      </Link>
    </>
  );
}
