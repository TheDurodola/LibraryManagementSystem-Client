import { useState, useEffect } from "react";
import "../styles/AddBook.css";

function AddBook() {
  const [form, setForm] = useState({ book_isbn: "", quantity: "" });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/librarian/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`${data.title} has been added...`);
        alert("errorMessage.error.message")
        
      } else {
        const errorMessage = await response.json();
        setMessage(`Error: ${errorMessage.error.message}`);
        alert(errorMessage.error.message)
        console.log("oboi")
      }
    } catch (err) {
      console.log("Network Connection Failed!");
      alert("errorMessage.error.message")
      setInterval(() => {}, 50000)
    }
  };

  return (
    <>
    <div className="addbook-box">
      <form onSubmit={addBook}>
        <input
          type="number"
          placeholder="Enter ISBN"
          name="book_isbn"
          onChange={handleInput}
          value={form.book_isbn.replace(/^-+/, "")}
          onKeyDown={(e) => {
            if (e.key === " ") e.preventDefault();
          }}
        />
        <input
          type="number"
          placeholder="Enter Quantity"
          value={form.quantity}
          name="quantity"
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === " ") e.preventDefault();
          }}
        />
        <input type="submit"/>
      </form>
      </div>
    </>
  );
}

export default AddBook;
