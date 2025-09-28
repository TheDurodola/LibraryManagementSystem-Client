import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPageHero.module.css";

function SignUpPageHero() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    role: "patron",
  });
  const [backgroundColor, setBackgroundColor] = useState("#FCFCFD");
  const [textColor, setTextColor] = useState("#36395A");

  const [message, setMessage] = useState("Sign Up");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.error.message);
        setTextColor("#FCFCFD");
        setBackgroundColor("#db0000ff");

        setTimeout(() => {
          setMessage("Sign Up");
          setTextColor("#36395A");
          setBackgroundColor("#FCFCFD");
        }, 3000);
      } else {
        setMessage("Registered");
        setTextColor("#FCFCFD");
        setBackgroundColor("#23ad00ff");
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      }
    } catch (err) {
      console.log("Network Error. Failing to reach the Backend");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.inputbox}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <input
              className={styles.input}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              minLength={3}
              onKeyDown={handleKeyDown}
              value={form.firstname}
              onChange={handleInput}
            />
            <input
              className={styles.input}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              minLength={3}
              onKeyDown={handleKeyDown}
              value={form.lastname}
              onChange={handleInput}
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onKeyDown={handleKeyDown}
              value={form.email}
              onChange={handleInput}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minLength={5}
              onKeyDown={handleKeyDown}
              value={form.password}
              onChange={handleInput}
            />
            <input
              className={styles.input}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              minLength={6}
              onKeyDown={handleKeyDown}
              value={form.phone}
              onChange={handleInput}
            />
            <button
              type="submit"
              style={{ backgroundColor: backgroundColor, color: textColor }}
            >
              {message}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPageHero;
