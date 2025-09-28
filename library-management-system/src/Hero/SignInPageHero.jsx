import styles from "./SignInPageHero.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInPageHero() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Sign In");
  const [backgroundColor, setBackgroundColor] = useState("#FCFCFD");
  const [textColor, setTextColor] = useState("#36395A");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault(e);
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error.message);
        setTextColor("#FCFCFD");
        setBackgroundColor("#db0000ff");

        setTimeout(() => {
          setMessage("Sign In");
          setTextColor("#36395A");
          setBackgroundColor("#FCFCFD");
        }, 3500);
      } else {
        console.log(data);
        setMessage("Signing In");
        setTextColor("#FCFCFD");
        setBackgroundColor("#23ad00ff");
        setTimeout(() => {
          if (data.role == "patron") navigate("/patron");
          if (data.role == "librarian") navigate("/librarian");
          if (data.role == "admin") navigate("/admin");
        }, 3000);
      }
    } catch (err) {
      alert("I am having issues");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.inputbox}>
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minLength={5}
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
              }}
            >
              {message}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPageHero;
