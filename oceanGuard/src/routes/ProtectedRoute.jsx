import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Jika belum login, arahkan ke halaman login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, tampilkan komponen yang diminta
  return children;
};

export default ProtectedRoute;
