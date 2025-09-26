import styles from "./BackToHomeButton.module.css";
import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <>
      <Link to="/">
        <button className={styles.button}>Back to Home Page</button>
      </Link>
    </>
  );
}
