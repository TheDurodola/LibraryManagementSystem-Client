import { useState } from "react";

function IncreaseExistingBook() {
  const [form, setForm] = useState({ isbn: "", quantity: "" });
  const [message, setMessage] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleQuantityIncrease = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/librarian/bookquantity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setInterval(() => {
          setMessage();
        }, 2000);
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.error.message}`);
        setInterval(() => {
          setMessage();
        }, 2000);
      }
    } catch (error) {
      console.log("Network Connection Failed!");
      alert("errorMessage.error.message");
      setInterval(() => {}, 50000);
    }
  };

  return (
    <>
      <div className="addbook-box">
        <form onSubmit={handleQuantityIncrease}>
          <input
            type="text"
            placeholder="Enter ISBN"
            name="isbn"
            onChange={handleInput}
            value={form.isbn}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input
            type="number"
            placeholder="How many books would you like to record"
            value={form.quantity}
            name="quantity"
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default IncreaseExistingBook;
