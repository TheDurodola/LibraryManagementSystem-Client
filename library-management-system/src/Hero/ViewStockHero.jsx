import styles from "./ViewStockHero.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewStockHero() {
  const [message, setMessage] = useState(
    "---------------------------------------------"
  );
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 1)");
  const [textColor, setTextColor] = useState("#000000ff");
  const [form, setForm] = useState({ isbn: "", quantity: "" });
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/books", {
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
          setBackgroundColor("rgba(0, 0, 0, 1)");
          setTextColor("#000000ff");
        }, 4500);
      } else {
        const data = await response.json();
        setMessage(data.message);
        setBackgroundColor("rgba(25, 165, 6, 1)");
        setTextColor("#ffffffff");
        setTimeout(() => {
          setMessage("---------------------------------------------");
          setBackgroundColor("rgba(0, 0, 0, 1)");
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
          style={{ borderCollapse: "separate", width: "100%" }}
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
        <Link to={"/admin"}>
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
