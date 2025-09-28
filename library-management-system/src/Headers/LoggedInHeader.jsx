import viteLogo from "../assets/icons8-library-48.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./LoggedInHeader.module.css";
import NavbarLogOutButton from "../Button/NavbarLogOutButton";

const API_BASE = "http://localhost:5000";

function LoggedInHeader() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Welcome Guest");

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`${API_BASE}/auth/profile`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(
          `${data.role.charAt(0).toUpperCase() + data.role.slice(1)} ${
            data.firstname
          }`
        );
      } else {
        console.error("Reached the backend and the backend threw an exception");
        navigate("/");
      }
    } catch (error) {
      console.error("Network Error, Backend Needs your attention");
    }
  };
  fetchUserProfile();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/auth/logout`, {
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

        <div className={styles.welcomeMessage}>
          <h3>Welcome,</h3>
          <h3 onClick={fetchUserProfile}>{message}</h3>
        </div>
        <div className={styles.buttonarea}>
          <NavbarLogOutButton></NavbarLogOutButton>
        </div>
      </div>
    </>
  );
}

export default LoggedInHeader;
