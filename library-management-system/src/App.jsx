import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage.jsx";
import Page404 from "./pages/Page404.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import LibrarianDashboard from "./pages/LibrarianDashboard.jsx";
import PatronDashboard from "./pages/PatronDashboard.jsx";
import AddBook from "./pages/AddBook.jsx";
import IncreaseStockPage from "./pages/IncreaseStockPage.jsx";
import BorrowBook from "./pages/BorrowBook.jsx";
import ReturnBook from "./pages/ReturnBook.jsx";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="error" element={<Page404 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/librarian" element={<LibrarianDashboard />} />
        <Route path="/librarian/book" element={<AddBook />} />
        <Route path="/librarian/stock" element={<IncreaseStockPage />} />
        <Route path="/patron" element={<PatronDashboard />} />
        <Route path="/patron/borrow" element={<BorrowBook />} />
        <Route path="/patron/return" element={<ReturnBook />} />
      </Routes>
    </main>
  );
}

export default App;
