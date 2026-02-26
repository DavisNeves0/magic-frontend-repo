import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../../components/UI/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3333/user-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      if (response.ok) {
        const data = await response.json();
        login(data.token);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-dark-neutral-100 w-1/3 h-2/3 p-10 flex flex-col justify-center gap-6 rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-amber-50">Welcome Back</h1>
          <p className="text-gray-300">
            Don't have an account yet?{" "}
            <a
              onClick={() => navigate("/register")}
              className="text-green-500 hover:underline cursor-pointer"
            >
              Create one
            </a>
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              className="w-full  p-2 pl-10 rounded bg-dark-neutral-200 placeholder:text-gray-300 text-gray-300"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative w-full">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              className="w-full  p-2 pl-10 rounded bg-dark-neutral-200 placeholder:text-gray-300 text-gray-300"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:cursor-pointer hover:bg-green-600 flex items-center justify-center gap-2"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
