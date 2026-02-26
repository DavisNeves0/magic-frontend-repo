import type { JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
