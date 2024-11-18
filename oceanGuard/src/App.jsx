import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import ReportPage from "./pages/ReportPage";
import HistoryReportPage from "./pages/HistoryReportPage";
import GeminiAIComponent from "./components/GeminiAIComponent";
import ChatBotPage from "./pages/ChatBotPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
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
          <Route
            path="/chat-bot"
            element={
              <ProtectedRoute>
                <ChatBotPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
