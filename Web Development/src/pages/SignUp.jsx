import React from "react";
import { useNavigate } from "react-router-dom";
import closeUpGreenLeavesNature from "../assets/close-up-green-leaves-nature.png";
import google from "../assets/Google.svg";
import logoFbSimple from "../assets/Logo-fb-simple.svg";
import mail from "../assets/Mail.svg";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    navigate("/create-with-email"); // Arahkan ke halaman EmailCreate
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/sign-in"); // Arahkan ke halaman SignIn
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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black">
            Selamat datang di TanamanKu
          </h1>
          <p className="mt-4 text-xl font-semibold text-[#000000cc]">
            Buat akun baru dan mulailah menjelajahi semua fitur kami!
          </p>
        </div>

        {/* Button to navigate to EmailCreate */}
        <button
          type="button"
          onClick={handleEmailSignUp}
          className="w-full max-w-md h-14 bg-tanamanku-2 hover:bg-tanamanku-3 active:bg-tanamanku-4 rounded-lg font-bold text-black"
        >
          Daftar dengan Email
        </button>

        {/* Button Google (non-functional) */}
        <button className="flex items-center justify-center gap-2 w-full max-w-md bg-white hover:bg-[#f0f0f0] active:bg-[#e0e0e0] py-2.5 border border-[#565e6d] rounded-lg">
          <img className="w-5 h-5" alt="Google" src={google} />
          <span className="text-[#565e6d] font-normal text-base">
            Daftar dengan Google
          </span>
        </button>

        {/* Button Facebook (non-functional) */}
        <button className="flex items-center justify-center gap-2 w-full max-w-md bg-white hover:bg-[#f0f0f0] active:bg-[#e0e0e0] py-2.5 border border-[#565e6d] rounded-lg">
          <img className="w-5 h-5" alt="Logo fb simple" src={logoFbSimple} />
          <span className="text-[#565e6d] font-normal text-base">
            Daftar dengan Facebook
          </span>
        </button>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-base font-semibold text-[#5b5b5b]">
            Anda sudah memiliki akun?{" "}
            <span
              className="text-black cursor-pointer hover:text-blue-500"
              onClick={handleSignIn}
            >
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
