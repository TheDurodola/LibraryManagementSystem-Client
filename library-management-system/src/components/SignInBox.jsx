import { useNavigate } from "react-router-dom";
import "../styles/SignInBox.css";
import { useState } from "react";



function SignInBox() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("Sign In");
  const [isDisabled, setIsDisabled] = useState(false);
  const [backgroundColor, setColor] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        console.log(data.role)
        if (data.role == 'librarian') {
          navigate("/librarian");
        }

        else if (data.role == "admin") {
          navigate("/admin");
        }

        else if (data.role == "patron") {
          navigate("/patron");
        } else {
          navigate("/*");
        }
      } else {
        setMessage("Invalid Credentials");
        setColor("red");
        setIsDisabled(true);
        setTimeout(() => {
          setMessage("Sign In");
          setColor();
          setIsDisabled();
        }, 2000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="signin-inputbox">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={form.email.toLowerCase()}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={form.password}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <button
            className="submitbtn"
            type="submit"
            disabled={isDisabled}
            style={{ backgroundColor }}
          >
            {message}
          </button>
        </form>
      </div>
    </>
  );
}

export default SignInBox;
