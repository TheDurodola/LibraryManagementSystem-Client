import styles from "./ReturnBookHero.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BACKEND_URL = "http://localhost:5000/";

export default function ReturnBookHero() {
  const [message, setMessage] = useState(
    "---------------------------------------------"
  );
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 1)");
  const [textColor, setTextColor] = useState("#000000ff");
  const [form, setForm] = useState({ isbn: "" });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}patron/borrow`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  const handleBorrow = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}patron/return`, {
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
          setMessage("---------------------------------------------");
          setBackgroundColor("rgba(0, 0, 0, 1)");
          setTextColor("#000000ff");
        }, 5000);
      } else {
        const data = await response.json();
        setMessage(data.message);
        setBackgroundColor("rgba(25, 165, 6, 1)");
        setTextColor("#ffffffff");
        setTimeout(() => {
          setMessage("---------------------------------------------");
          setBackgroundColor("rgba(0, 0, 0, 1)");
          setTextColor("#000000ff");
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to reach the backend");
    }
  };

  return (
    <>
      <div className={styles.booktable}>
        <table
          border="1"
          cellPadding="9"
          style={{ borderCollapse: "separate", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.isbn_13}>
                  <td>{book.isbn13}</td>
                  <td>{book.book_title}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.body}>
        <form className={styles.inputbox} onSubmit={handleBorrow}>
          <div className={styles.text}>
            <h1>Return A Book</h1>
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
          <button>Submit</button>
        </form>
        <Link to={"/patron"}>
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
