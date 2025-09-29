import styles from "./DeleteUserHero.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DeleteUserHero() {
  const [message, setMessage] = useState(
    "---------------------------------------------"
  );
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 1)");
  const [textColor, setTextColor] = useState("#000000ff");
  const [form, setForm] = useState({ email: "", phone: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhostq:5000/admin/deleteuser", {
        method: "DELETE",
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
              <th>Lastname</th>
              <th>Firstname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.lastname}</td>
                  <td>{user.firstname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{new Date(user.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.body}>
        <form className={styles.inputbox} onSubmit={handleDeleteUser}>
          <div className={styles.text}>
            <h1>Delete User</h1>
            <div
              className={styles.backendresponse}
              style={{ background: backgroundColor, color: textColor }}
            >
              <p>{message}</p>
            </div>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter user email"
            name="email"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Enter user phone number"
            min="1"
            name="phone"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button>Submit</button>
        </form>
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
