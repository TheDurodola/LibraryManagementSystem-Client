import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import Page404 from "./pages/Page404.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Welcome from "./pages/Welcome.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx"
// import LibrarianDashboard from "./pages/LibrarianDashboard.jsx"
// import PatronDashboard from "./pages/PatronDashboard.jsx"

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
