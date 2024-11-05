import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeUpGreenLeavesNature from "../assets/close-up-green-leaves-nature.png";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email
    if (!email) {
      setError("Email wajib diisi.");
      return;
    } else if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      return;
    } else {
      setError(""); // Bersihkan pesan error jika email valid
    }

    // Navigasi ke halaman ForgotPasswordCode untuk memasukkan kode verifikasi
    navigate("/forgot-password-code", { state: { email } });
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
          Setel Ulang Kata Sandi Anda
        </h1>
        <p className="text-xl font-semibold text-[#000000cc] text-center mt-4">
          Jangan khawatir! Silakan masukkan email yang terkait dengan akun Anda.
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 transition duration-300 ease-in-out">
            {error}
          </p>
        )}

        {/* Email Input */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            className="w-full h-14 pl-4 pr-4 py-2 border border-solid border-black rounded-md text-base"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-tanamanku-2 hover:bg-tanamanku-3 active:bg-tanamanku-4 rounded-lg font-bold text-black mt-4"
          >
            Kirim Kode
          </button>
        </form>

        {/* Back to Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-base font-semibold text-[#5b5b5b]">
            Sudah ingat kata sandi Anda?{" "}
            <span
              className="text-black cursor-pointer hover:text-blue-500"
              onClick={() => navigate("/sign-in")}
            >
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
