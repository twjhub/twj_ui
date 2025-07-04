import { LuHouse } from "react-icons/lu";
import LoginImg from "../assets/auth_imgs/login-img.png";
import Logo from "../assets/auth_imgs/Logo.svg";
import "react-phone-number-input/style.css";
import { useState } from "react";
import eye from "../assets/auth_imgs/Eye_light.svg";
import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";
import "../App.css";
import eye_lines from "../assets/dashboard_img/Eye_hide_dark.svg";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  // Single state to hold all form values (inputs)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    login,
    // isLoading,
    isLoadingLogin,
    // isAuthenticated,
    loginError,
  } = useAuthStore();

  // Separate state for errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // State for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Field Validation using Switch Statement
  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          setErrors((prev) => ({
            ...prev,
            email: "This field is required",
          }));
        } else if (!emailRegex.test(value)) {
          setErrors((prev) => ({
            ...prev,
            email: "Please enter a valid email",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            email: "",
          }));
        }
        break;

      case "password":
        if (value.length === 0) {
          setErrors((prev) => ({
            ...prev,
            password: "This field is required",
          }));
        } else if (value.length < 8) {
          setErrors((prev) => ({
            ...prev,
            password: "Please enter a valid password",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            password: "",
          }));
        }
        break;

      default:
        break;
    }
  };

  // Update form field value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isFormInvalid =
    Object.values(errors).some((error) => error) ||
    !formData.email ||
    !formData.password;

  // submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call the login function from Zustand store
    login(formData, navigate);
    // console.log(formData);
  };

  return (
    <div className="flex  md:h-[calc(100vh-1rem)] h-full w-full">
      {/* Left: Login Form */}
      <form
        onSubmit={handleSubmit}
        className="[@media(min-width:1100px)]:w-1/2 w-full my-[1rem]   md:mx-[2rem] mx-[10px]"
      >
        <div className="sm:mt-8  mt-2">
          <div className="Nav flex  justify-between">
            <a href="https://twjhub.com/" className="cursor-pointer">
              <img src={Logo} className="md:w-[188px]  w-[200px] " alt="Logo" />
            </a>
            <div className=" sm:flex hidden items-center text-[15px]">
              <p className="font-[500] text-[#27014F]">
                Don't have an account?
              </p>
              <NavLink
                to="/signup"
                className="cursor-pointer  ml-[5px] text-[#9605C5]"
              >
                Create account
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex  w-full md:h-[80%] md:max-w-[480px]  mx-auto justify-center items-center">
          <div className="flex flex-col justify-center w-full sm:p-8 p-0 ">
            <div className="flex flex-col mt-[2rem] items-center justify-center ">
              <h3 className="text-[#27014F] ">
                Please check that you are visiting the correct URL
              </h3>

              <div className=" flex items-center justify-center gap-0.5 mt-2 mb-4 border border-[#b8c1cd] rounded-[30px] px-8 py-2.5">
                <span className="flex items-center gap-1 text-[#15aa64] text-[16px]">
                  <FaLock /> <p>https://</p>
                </span>
                <span className="text-[#27014F]">app.twjhub.com</span>
              </div>
            </div>
            <h2 className="text-2xl sm-mt-0 mt-5 font-bold md:mb-[0.4rem] mb-0 md:text-[40px] text-[30px] text-[#27014F] w-full leading-[2.5rem]">
              Welcome back
            </h2>
            <p className="md:text-[14px] text-[16px] md:mb-0 mb-3 text-[#27014F]">
              We're happy to see you here again.
            </p>
            <div className="flex flex-col md:mt-[2rem] mt-[1rem]">
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="md:hidden block font-semibold mt-2 text-[16px] text-[#8b8989] "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => validateField("email", formData.email)}
                  className={`py-4 md:p-2.5 px-3  border  text-[16px]  border-[#A4A4A4] w-full focus:border-2  outline-none rounded-md ${
                    errors.email
                      ? "border border-red-600"
                      : "focus:border-purple-800"
                  } `}
                />
                {errors.email && (
                  <p className="text-red-500 text-[13px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative w-full">
                <label
                  htmlFor="password "
                  className="md:hidden font-semibold block mt-2 text-[16px] text-[#8b8989] "
                >
                  Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={() => validateField("password", formData.password)}
                  className={`py-4 md:py-2.5 px-3   text-[16px] border  border-[#A4A4A4] w-full focus:border-2 outline-none rounded-md ${
                    errors.password
                      ? "border border-red-600"
                      : "focus:border-purple-800"
                  } `}
                />

                <div
                  className={`absolute  cursor-pointer right-[0.8rem]  md:bottom-[0.7rem] bottom-[1rem]
                  }`}
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <img src={eye} className="w-full h-full" alt="" />
                  ) : (
                    <img
                      src={eye_lines}
                      className=" top-[1.5px]  left-[px]"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}

              {loginError && (
                <p className="text-red-600 text-[14px]  mt-1">{loginError}</p>
              )}

              <NavLink
                to="/email_for_reset_password"
                className="md:text-[13px] text-[16px] text-end cursor-pointer text-[#27014F] underline bold-semibold md:mt-[5px] mt-[1rem] mb-[11px]"
              >
                Forgot password?
              </NavLink>

              <button
                className={`bg-[#9605C5] md:mt-[2rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]  ${
                  isFormInvalid
                    ? "opacity-60 cursor-not-allowed"
                    : "  cursor-pointer"
                }`}
                disabled={isFormInvalid}
              >
                {isLoadingLogin ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>

              <div className=" sm:hidden flex mt-5 mb-15 items-center justify-center text-[16px]">
                <p className="font-[500] text-[#27014F]">
                  Don't have an account?
                </p>
                <NavLink
                  to="/signup"
                  className="cursor-pointer  ml-[5px] text-[#9605C5]"
                >
                  Create account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Right: Image with Overlay */}
      <div className="  hidden [@media(min-width:1100px)]:block [@media(min-width:1100px)]:relative  w-[641px] h-[calc(100vh-2rem)] m-[1rem]">
        <img
          src={LoginImg}
          alt="Signup"
          className="w-full h-full rounded-[3rem] object-top object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t rounded-[3rem] from-[#27014F] to-transparent opacity-90"></div>
        <a
          href="https://twjhub.com/"
          className="absolute top-8 right-8 bg-white rounded-full p-[0.8rem] text-2xl cursor-pointer"
        >
          <LuHouse className="text-[#27014F] text-[1.5rem]" />
        </a>
        <div className="absolute bottom-[4rem] left-10 text-white">
          <h3 className="text-[48px] leading-[3rem] font-semibold">
            Trade the future, <br /> today.
          </h3>
          <p className="text-[32px] text-[#D671F7]">
            safe, secure, and simple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
