import styles from "./Button.module.css";
import {Link} from "react-router-dom"

export default function NavbarSignUpButton() {
  return (
    <>
    <Link to="/signup">
      <button className={styles.button}>Sign Up</button>
      </Link>
    </>
  );
}
