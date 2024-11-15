import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/LoginForm";
import AboutUsPage from "./pages/AboutUsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import ReportPage from "./pages/ReportPage";
import HistoryReportPage from "./pages/HistoryReportPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Halaman utama */}
          <Route path="/login" element={<LoginForm />} /> {/* Halaman login */}
          <Route path="/aboutUs" element={<AboutUsPage />} />{" "}
          {/* Halaman login */}
          {/* Tambahkan route lain sesuai kebutuhan */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <ReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history-report"
            element={
              <ProtectedRoute>
                <HistoryReportPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
