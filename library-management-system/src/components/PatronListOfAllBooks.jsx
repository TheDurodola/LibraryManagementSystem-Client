import { useState, useEffect } from "react";
import "../styles/ListOfBooks.css"

function PatronListOfBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/patron/book", {
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
          isbn: book.isbn,
          isbn_13: book.isbn_13,
          title: book.title,
          genre: book.genre,
          quantity: book.quantity,
          author: book.author || "Unknown Author",
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
      <h2>Library Books</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>ISBN-13</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.isbn || book.isbn_13}>
                <td>{book.isbn}</td>
                <td>{book.isbn_13}</td>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PatronListOfBooks;
