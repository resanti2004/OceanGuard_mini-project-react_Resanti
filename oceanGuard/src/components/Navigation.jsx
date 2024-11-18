import React from "react";
import LogoOCG from "../assets/logoOCG.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Navbar } from "flowbite-react";

const Navigation = () => {
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
    <>
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
            {/* Site branding */}
            <div className="flex flex-1 items-center">
              <img src={LogoOCG} className="mr-3 h-6 sm:h-9" alt="OCG Logo" />
            </div>

            {/* Desktop sign in links */}
            <ul className="flex flex-1 items-center justify-end gap-3">
              {isLoggedIn ? (
                <li>
                  <Button
                    onClick={handleLogout}
                    className="btn-sm bg-secondary text-gray-800 shadow hover:bg-primary hover:text-white"
                  >
                    Logout
                  </Button>
                </li>
              ) : (
                <li>
                  <Button
                    onClick={() => navigate("/login")}
                    className="btn-sm bg-secondary text-gray-800 shadow hover:bg-primary hover:text-white"
                  >
                    Login
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
