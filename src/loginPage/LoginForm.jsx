import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    const savedUsername = localStorage.getItem("rememberedUsername");
    if (savedUsername) {
      setValue("Username", savedUsername);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmission = (data) => {
    console.log(data);

    if (rememberMe) {
      localStorage.setItem("rememberedUsername", data.Username);
    } else {
      localStorage.removeItem("rememberedUsername");
    }

    reset();
  };

  return (
    <div className="mx-auto max-w-sm">
      <h1 className="mb-6 text-center text-2xl font-bold text-white">Login</h1>
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
            <p className="mt-1 text-sm text-red-500">
              {errors.Username.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute m-3 text-white" />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`w-full rounded-lg bg-white bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between gap-7 text-white sm:gap-10">
          <label className="flex items-center max-sm:text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          <Link
            className="hover:underline max-sm:text-sm"
            to="/gate-pass-system/forgot-password"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2 text-center text-[15px] font-medium text-white shadow-lg shadow-blue-400/50 transition-all duration-1000 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
          type="submit"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="mt-4 text-center text-white max-sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/gate-pass-system/register"
            className="text-purple-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
