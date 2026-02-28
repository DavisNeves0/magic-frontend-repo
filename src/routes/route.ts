import NotFound from "../pages/404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "*", Component: NotFound }
];

export const protectedRoutes = [
  { path: "/dashboard", Component: Home },
  { path: "/", Component: Home }
];
