import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import background from "./assets/background.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [registerState, setRegisterState] = useState(null);
  
  const password = watch("password"); // Watching the password field

  const onSubmission = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
    // Check if email already exists
    const userExists = existingUsers.some(user => user.Email === data.Email);
    
    if (userExists) {
      alert("This email is already registered.");
      reset();
    } else {
      const updatedUsers = [...existingUsers, data];
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      alert("Registration successful!");
      reset();
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-lg backdrop-blur-sm">
        <div className="mx-auto max-w-sm">
          <h1 className="mb-6 text-center text-2xl font-bold text-white">
            Register
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmission)}>
            {/* Username Field */}
            <div className="relative">
              <FaUser className="absolute m-3 text-white" />
              <input
                type="text"
                id="Username"
                placeholder="Username"
                className={`w-full rounded-lg bg-white bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none ${
                  errors.Username ? "border-red-500" : ""
                }`}
                {...register("Username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username cannot exceed 20 characters",
                  },
                })}
              />
              {errors.Username && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.Username.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute m-3 text-white" />
              <input
                type="email"
                id="Email"
                placeholder="Email"
                className={`w-full rounded-lg bg-white bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none ${
                  errors.Email ? "border-red-500" : ""
                }`}
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.Email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.Email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute m-3 text-white" />
              <input
                type="password"
                id="Password"
                placeholder="Password"
                className={`w-full rounded-lg bg-white bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain one uppercase, one lowercase, and one number",
                  },
                })}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <FaLock className="absolute m-3 text-white" />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className={`w-full rounded-lg bg-white bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-sm font-medium text-white shadow-lg shadow-green-400/50 transition-all duration-1000 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800"
              type="submit"
            >
              Register
            </button>

            {/* Already Have Account Link */}
            <div className="mt-4 text-center text-white">
              Already have an account?{" "}
              <Link
                className="text-purple-300 hover:underline"
                to="/gate-pass-system/"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
