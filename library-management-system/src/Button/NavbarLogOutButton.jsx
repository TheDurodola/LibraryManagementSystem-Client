import styles from "./Button.module.css";
import { Link } from "react-router-dom"

export default function NavbarSignInButton() {
  return (
    <>
    <Link to="/signout">
      <button className={styles.button}>Sign Out</button>
      </Link>
    </>
  );
}
