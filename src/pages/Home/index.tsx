import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Home = () => {
  const [me, setMe] = useState<{
    _id: string;
    name: string;
    email: string;
    created_at: string;
    updatedAt: string;
  }>({
    _id: "",
    name: "",
    email: "",
    created_at: "",
    updatedAt: ""
  });
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    const handleMe = async () => {
      try {
        const response = await fetch("http://localhost:3333/user/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log(data);
        setMe(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    handleMe();
  }, [token]);

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-2xl font-bold text-amber-50">
        Welcome {me.name} to the Home Page
      </h1>
      <p className="text-amber-50">your email is {me.email}</p>

      <div>
        <p
          className="text-amber-50 cursor-pointer hover:underline"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Home;
