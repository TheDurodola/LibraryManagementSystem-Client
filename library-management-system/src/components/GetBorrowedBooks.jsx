import { useState, useEffect } from "react";
import "../styles/ListOfBooks.css"

export default function GetBorrowedBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/patron/borrow", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        console.log(data)
        const transformedBooks = data.map((book) => ({
          isbn: book.book_isbn,
          isbn_13: book.borrower_id,
          title: book.return_date,
          genre: book.is_returned,
          author: book.author || "Unknown Author",
          borrow_date: book.borrow_date,
        }));

        setBooks(transformedBooks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="listofbooks-records">
      <h2>Books to be returned</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Date Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.isbn || book.isbn_13}>
                <td>{book.isbn}</td>
                <td>{book.title || "No" }</td>
                <td>{book.borrow_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


