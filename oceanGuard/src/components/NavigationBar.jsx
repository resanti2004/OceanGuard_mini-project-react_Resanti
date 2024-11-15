"use client";
import React, { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";
import logoOCG from "../assets/logoOCGWhite.png";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  // State untuk status login, diperbarui berdasarkan localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    // Fungsi untuk menangani perubahan pada localStorage
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // Menambahkan event listener untuk storage
    window.addEventListener("storage", handleStorageChange);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    // Menghapus data login dari localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    // Update state dan arahkan ke halaman LandingPage
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar fluid rounded className="bg-primary px-8 py-4 shadow-lg">
      <Navbar.Brand href="/">
        <img src={logoOCG} className="mr-3 h-6 sm:h-9" alt="OCG Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isLoggedIn ? (
          // Tampilkan tombol Logout jika sudah login
          <Button
            className="bg-secondary text-primary hover:text-white  hover:bg-primary "
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          // Tampilkan tombol Get Started jika belum login
          <>
            <Button
              className="bg-secondary text-primary hover:bg-primary hover:text-white mr-2"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Navbar.Toggle />
          </>
        )}
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          className="text-white text-lg"
          onClick={() => navigate(isLoggedIn ? "/home" : "/")}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-white text-lg"
          onClick={() => navigate("/aboutUs")}
        >
          About Us
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white text-lg">
          Activity
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white text-lg">
          Member
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
