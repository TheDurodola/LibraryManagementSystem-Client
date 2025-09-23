import viteLogo from "../assets/icons8-library-48.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="navbarlogo">
            <img src={viteLogo} alt="librarylogo" />
          </div>
        </Link>

        
        <div className="navbartitle">
          <h1>TheLibrary</h1>
        </div>

        
        <div>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
          <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
