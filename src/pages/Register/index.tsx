import { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { Spinner } from "../../components/UI/Spinner";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit() {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3333/user-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      if (response.status === 201) {
        const data = await response.json();
        login(data.token);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-dark-neutral-100 w-1/3 h-2/3 p-10 flex flex-col justify-center gap-6 rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-amber-50">
            Create an Account
          </h1>
          <p className="text-gray-300">
            Already have an account?{" "}
            <a
              onClick={() => navigate("/login")}
              className="text-green-500 hover:underline cursor-pointer"
            >
              Sign in
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
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              className="w-full  p-2 pl-10 rounded bg-dark-neutral-200 placeholder:text-gray-300 text-gray-300"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            {loading ? <Spinner /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
