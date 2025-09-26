import viteLogo from "../assets/icons8-library-48.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./LoggedInHeader.module.css";
import NavbarLogOutButton from "../Button/NavbarLogOutButton";



function LoggedInHeader() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          navigate("/");
        } else {
          const data = await response.json();
          setMessage(`Welcome, ${data.role} ${data.firstname}`);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/");
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("Unable to log out");
      }
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

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
              <NavbarLogOutButton></NavbarLogOutButton>
            </div>
          </div>
        </>
  );
}

export default LoggedInHeader;
