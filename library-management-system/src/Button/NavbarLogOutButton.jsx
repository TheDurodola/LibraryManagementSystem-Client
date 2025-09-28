import styles from "./Button.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarSignInButton() {
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) navigate("/");
      else alert("Unable to Sign Out");
    } catch (err) {
      alert("there joor");
    }
  };

  return (
    <>
      <Link to="/">
        <button onClick={handleSignOut} className={styles.button}>
          Sign Out
        </button>
      </Link>
    </>
  );
}
