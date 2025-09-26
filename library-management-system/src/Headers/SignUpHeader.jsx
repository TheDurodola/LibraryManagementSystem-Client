import viteLogo from "../assets/icons8-library-48.png";
import styles from "./SignUpHeader.module.css";
import NavbarSignInButton from "../Button/NavbarSignInButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoarea}>
          <Link to="/">
            <img src={viteLogo} alt="librarylogo" />
          </Link>
        </div>
        <div className={styles.companyName}>
          <h1>TheLibrary</h1>
        </div>
        <div className={styles.buttonarea}>
          <NavbarSignInButton></NavbarSignInButton>
        </div>
      </div>
    </>
  );
}

export default Navbar;
