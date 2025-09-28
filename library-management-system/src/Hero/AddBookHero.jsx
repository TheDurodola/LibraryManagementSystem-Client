import styles from "./AddBookHero.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AddBookHero() {
  const [message, setMessage] = useState(
    "Enter any book into the system using its internationally recognized ISBN"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)"
  );
  const [textColor, setTextColor] = useState("#000000ff");
  const [form, setForm] = useState({ isbn: "", quantity: "" });

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/librarian/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.error.message);
        setBackgroundColor("rgba(255, 0, 0, 1)");
        setTextColor("#ffffffff");
        setTimeout(() => {
          setMessage(
            "Enter any book into the system using its internationally recognized ISBN"
          );
          setBackgroundColor("rgba(255, 255, 255, 1)");
          setTextColor("#000000ff");
        }, 4500);
      } else {
        const data = await response.json();
        setMessage(data.message);
        setBackgroundColor("rgba(25, 165, 6, 1)");
        setTextColor("#ffffffff");
        setTimeout(() => {
          setMessage(
            "Enter any book into the system using its internationally recognized ISBN"
          );
          setBackgroundColor("rgba(255, 255, 255, 1)");
          setTextColor("#000000ff");
        }, 4500);
      }
    } catch (error) {
      console.error("Failed to reach the backend");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <form className={styles.inputbox} onSubmit={handleAddBook}>
          <div className={styles.text}>
            <h1>Add A Book</h1>
            <div
              className={styles.backendresponse}
              style={{ background: backgroundColor, color: textColor }}
            >
              <p>{message}</p>
            </div>
          </div>
          <input
            className={styles.input}
            type="number"
            placeholder="Enter ISBN"
            name="isbn"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Enter Quantity"
            max="100"
            min="1"
            name="quantity"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button>Add</button>
        </form>
        <Link to={"/librarian"}>
          <button
            className={styles.backbutton}
            style={{ background: "black", color: "white" }}
          >
            Back to Dashboard
          </button>
        </Link>
      </div>
    </>
  );
}
