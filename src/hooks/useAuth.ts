import { useMemo } from "react";

export function useAuth() {
  const token = localStorage.getItem("token");

  const isAuthenticated = useMemo(() => {
    return !!token;
  }, [token]);

  return {
    token,
    isAuthenticated
  };
}
