import { useMemo } from "react";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const isAuthenticated = useMemo(() => {
    return !!token;
  }, [token]);

  function login(token: string) {
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }

  return {
    token,
    isAuthenticated,
    login
  };
}
