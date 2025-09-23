import "../styles/SignUpBox.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpBox() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: "patron",
  });
  const [message, setMessage] = useState("Submit");
  const [isDisabled, setIsDisabled] = useState(false);
  const [backgroundColor, setColor] = useState();

const resetForm = () => {
  setForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    role: "patron",
  });
};


  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Loading...")
        setTimeout(() =>{
          navigate("/welcome")
        }, 3000
        )
      } else {
        const data = await response.json();
        setMessage(data.error.message);
        setColor("red");
        setIsDisabled(true);
        setTimeout(() => {
          setMessage("Submit");
          setColor();
          setIsDisabled();
          resetForm();
        }, 2000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="signup-inputbox">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Firstname"
            required
            name="firstname"
            value={form.firstname}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="text"
            placeholder="Lastname"
            required
            value={form.lastname}
            onChange={handleInput}
            name="lastname"
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="email"
            value={form.email.toLowerCase()}
            placeholder="Email"
            required
            name="email"
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="tel"
            value={form.phone}
            placeholder="Phone"
            pattern="\d*"
            required
            name="phone"
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handleInput}
            value={form.password}
            name="password"
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />

          <button
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

export default SignUpBox;
