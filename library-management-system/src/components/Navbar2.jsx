import { Link } from "react-router-dom";
import "../styles/Navbar2.module.css";

function Navbar2() {
  return (
    <>
      <div className="navbar2">
        <Link to="/">
          <div className="navbar2title">
            <h1>TheLibrary</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar2;
