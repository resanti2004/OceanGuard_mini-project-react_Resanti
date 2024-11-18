import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoOCG from "../assets/logoOCG.png";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Data pengguna statis (misalnya untuk testing)
  const staticUser = {
    email: "user@example.com",
    password: "password123",
  };

  // Cek jika sudah login, redirect ke halaman home
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  // Fungsi untuk menangani login
  const handleLogin = () => {
    if (email === staticUser.email && password === staticUser.password) {
      // Simpan data pengguna ke localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({ email }));

      // Arahkan ke halaman Home
      navigate("/home");
    } else {
      setErrorMessage("Email atau password salah.");
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white/85 mx-4 p-20 rounded-3xl backdrop-filter backdrop-blur-md shadow-md w-full md:w-1/2 lg:max-w-lg border border-primary">
          <div className="absolute top-6 left-8">
            <img src={logoOCG} alt="Logo OCG" className="w-32 h-auto" />
          </div>
          <h1 className="text-3xl font-bold text-center">LOG IN</h1>
          <div className="text-center mb-10">
            <p>Welcome back to Community!</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="user@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            <div className="flex justify-center mb-1">
              <button
                className="w-full max-w-72 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p>
                New member?{" "}
                <a
                  href="/create-account"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Create New Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
