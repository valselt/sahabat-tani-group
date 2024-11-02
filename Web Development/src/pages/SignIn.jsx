import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeUpGreenLeavesNature from "../assets/close-up-green-leaves-nature.png";
import removeRedEye from "../assets/remove-red-eye.svg";

const handleForgotPassword = (e) => {
  e.preventDefault();
  navigate("/forgot-password"); // Arahkan ke halaman ForgotPassword
};

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordStrength = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Reset errors
    setError("");
    setPasswordError("");

    // Validasi email dan password bersamaan
    let isValid = true;

    if (!email) {
      setError("Email wajib diisi.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Kata sandi wajib diisi.");
      isValid = false;
    } else if (!validatePasswordStrength(password)) {
      setPasswordError(
        "Kata sandinya terlalu lemah. Silakan gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol."
      );
      isValid = false;
    }

    if (!isValid) return; // Hentikan proses jika validasi gagal

    // Lanjutkan ke halaman berikut setelah validasi berhasil
    navigate("/dashboard"); // Sesuaikan rute tujuan setelah login
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] w-full min-h-screen bg-neutral-50 items-center">
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 p-10">
        <img
          className="w-full object-cover max-h-[900px] rounded-lg"
          alt="Close up green"
          src={closeUpGreenLeavesNature}
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 p-6 md:p-12 lg:p-24 space-y-6">
        <h1 className="text-4xl font-bold text-black text-center">
          Selamat datang <br /> di TanamanKu
        </h1>
        <p className="text-xl font-semibold text-[#000000cc] text-center mt-4">
          Masuk Akun Anda
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Email Input */}
        <input
          className="w-full max-w-md h-14 pl-4 pr-4 py-2 border border-solid border-black rounded-md text-base"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <div className="relative w-full max-w-md">
          <input
            className="w-full h-14 pl-4 pr-12 py-2 border border-solid border-black rounded-md text-base"
            placeholder="Kata Sandi"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            alt="Toggle password visibility"
            src={removeRedEye}
            onClick={togglePasswordVisibility}
          />
        </div>

        {/* Password Strength Error Message */}
        {passwordError && (
          <p className="text-red-500 text-center w-full max-w-md">
            {passwordError}
          </p>
        )}

        {/* Remember Me Checkbox */}
        <div className="flex items-center w-full max-w-md mt-4">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-2 border-black mr-2"
          />
          <label className="text-sm text-black">
            Ingat saya selama 30 hari
          </label>
        </div>

        {/* Forgot Password Link */}
        <div className="text-right w-full max-w-md">
          <a
            href="#"
            className="text-sm text-black underline cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/forgot-password")}
          >
            Lupa Kata Sandi?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          onClick={handleSignIn}
          className="w-full max-w-md h-14 bg-tanamanku-2 hover:bg-tanamanku-3 active:bg-tanamanku-4 rounded-lg font-bold text-black mt-4"
        >
          Masuk
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-base font-semibold text-[#5b5b5b]">
            Belum punya akun?{" "}
            <span
              className="text-black cursor-pointer hover:text-blue-500"
              onClick={() => navigate("/")} // Navigasi ke SignUp
            >
              Daftar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
