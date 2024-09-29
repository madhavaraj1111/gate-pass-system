import LoginForm from "./LoginForm";
import background from "./assets/background.jpg";

const LoginPage = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-lg backdrop-blur-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
