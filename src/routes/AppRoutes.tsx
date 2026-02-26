import { BrowserRouter, Route, Routes } from "react-router";
import { protectedRoutes, publicRoutes } from "./route";
import { RequireAuth } from "../components/RequireAuth";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}

        {protectedRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <RequireAuth>
                <Component />
              </RequireAuth>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
