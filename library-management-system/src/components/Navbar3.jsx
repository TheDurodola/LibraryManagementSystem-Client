import viteLogo from "../assets/icons8-library-48.png";
import styles from  "../styles/Navbar3.module.css";
import {Link} from "react-router-dom"


function Navbar3() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="navbarlogo">
            <img src={viteLogo} alt="librarylogo" />
          </div>
        </Link>

        
        <div className={styles.title}>
          <h1>TheLibrary</h1>
        </div>

        
        <div>
          <Link to="/signin">
            <button>Sign Out</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar3;
