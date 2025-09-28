import styles from "./IncreaseStockHero.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function IncreaseStockHero() {
  const [message, setMessage] = useState(
    "---------------------------------------------"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)"
  );
  const [textColor, setTextColor] = useState("#000000ff");
  const [form, setForm] = useState({ isbn: "", quantity: "" });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/librarian/book", {
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

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/librarian/bookquantity",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.error.message);
        setBackgroundColor("rgba(255, 0, 0, 1)");
        setTextColor("#ffffffff");
        setTimeout(() => {
          setMessage("---------------------------------------------");
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
    <div className={styles.booktable}>
      <table
        border="1"
        cellPadding="9"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Quantity</th>
            <th>Added By</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.isbn_13}>
                <td>{book.isbn_13}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.quantity}</td>
                <td>{book.added_by}</td>
                <td>{new Date(book.created_at).toLocaleString()}</td>
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
        <form className={styles.inputbox} onSubmit={handleAddBook}>
          <div className={styles.text}>
            <h1>Increase Quantity</h1>
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
            placeholder="Enter Quantity to be Added"
            max="100"
            min="1"
            name="quantity"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button>Submit</button>
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
