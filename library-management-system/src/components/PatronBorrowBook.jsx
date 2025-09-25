import { useState } from "react";

export default function BorrowBook() {
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setBookId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:5000/patron/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ bookId }),
      });

      if (response.ok) {
        setMessage("Book has been successfully borrowed");
      } else {
        setMessage("Failed to borrow book");
        console.log("Wetin dey sup again");
      }
    } catch (err) {
      console.error("Network Connection Failed!", err);
      setMessage("Network error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="bookId"
          id="bookId"
          value={bookId}
          onChange={handleInput}
          placeholder="Enter the ISBN"
          required
        />
        <input type="submit" value="Borrow" />
      </form>

      {message && <p>{message}</p>}
    </>
  );
}
