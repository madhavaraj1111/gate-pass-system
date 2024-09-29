import { useForm } from "react-hook-form";
import background from "./assets/background.jpg";
import { GrMail } from "react-icons/gr";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here, send a request to your backend to handle the password reset email
    alert("Password reset link has been sent to your email");
    reset(); // Reset the form after submission
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-lg backdrop-blur-sm">
        <div className="mx-auto max-w-sm">
          <h1 className="mb-6 text-center text-2xl font-bold text-white">
            Forgot Password
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <GrMail className="absolute m-3 text-white" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-400 bg-opacity-20 py-2 pl-10 pr-4 text-white placeholder-white outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-800 dark:focus:ring-red-100"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
