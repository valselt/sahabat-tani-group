import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import closeUpGreenLeavesNature from "../assets/close-up-green-leaves-nature.png";

export const EmailCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", ""]); // State untuk kode verifikasi
  const inputRefs = useRef([]); // Array refs untuk setiap kotak input
  const [timer, setTimer] = useState(60); // State untuk timer countdown 1 menit
  const [resendEnabled, setResendEnabled] = useState(false); // State untuk mengatur tombol resend

  useEffect(() => {
    // Mulai countdown ketika komponen di-mount
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Bersihkan interval saat unmount
    } else {
      setResendEnabled(true); // Aktifkan tombol resend setelah timer selesai
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newCode = [...code];
    newCode[index] = value.slice(-1); // Ambil satu digit terakhir
    setCode(newCode);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerification = () => {
    const verificationCode = code.join("");
    // Panggil API atau navigasi setelah verifikasi
    navigate("/dashboard"); // Sesuaikan rute
  };

  const handleResendCode = async () => {
    // Panggil API untuk mengirim ulang kode verifikasi
    try {
      const response = await fetch("/api/resend-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "user@example.com" }), // Ganti dengan email pengguna
      });
      if (response.ok) {
        console.log("Kode verifikasi dikirim ulang");
        setTimer(60); // Mulai countdown lagi
        setResendEnabled(false); // Nonaktifkan tombol resend
      } else {
        console.error("Gagal mengirim ulang kode");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
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
          Verifikasi Kode
        </h1>
        <p className="mt-4 text-xl font-semibold text-[#000000cc] text-center">
          Masukkan kode verifikasi yang baru saja kami kirimkan ke alamat email
          Anda
        </p>
        <p className="text-base font-semibold text-[#61c454] text-center">
          Email berhasil dikirim.
        </p>

        {/* Kode Verifikasi Input */}
        <div className="flex justify-center gap-4 mt-4">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border border-solid border-[#9095a0] rounded-[5px] shadow-[0px_4px_4px_#00000040] text-center text-xl font-semibold"
            />
          ))}
        </div>

        {/* Countdown Timer or Resend Button */}
        {resendEnabled ? (
          <button
            onClick={handleResendCode}
            className="mt-4 text-blue-500 font-semibold cursor-pointer hover:text-blue-700"
          >
            Kirim ulang kode
          </button>
        ) : (
          <p className="text-base font-normal text-black text-center mt-4">
            Kirim ulang kode dalam {timer} detik
          </p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerification}
          className="w-full max-w-md h-14 bg-tanamanku-2 hover:bg-tanamanku-3 active:bg-tanamanku-4 rounded-lg font-bold text-black mt-4"
        >
          Verifikasi
        </button>
      </div>
    </div>
  );
};

export default EmailCode;
