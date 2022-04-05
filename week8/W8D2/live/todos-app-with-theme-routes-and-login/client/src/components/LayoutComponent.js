import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProviderWrapper";
import { ThemeContext } from "../context/ThemeProviderWrapper";

export function LayoutComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  console.log("theme:", theme);
  console.log("toggleTheme", toggleTheme);

  const determineStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div
      className={"container " + (theme === "light" ? "bright" : "dark")}
      style={{ background: theme === "light" ? "white" : "darkgrey" }}
    >
      <nav
        className={"navbar " + (theme === "light" ? "bright-nav" : "dark-nav")}
      >
        {user ? (
          <>
            <NavLink style={determineStyle} to="/todos">
              Todos
            </NavLink>

            <NavLink style={determineStyle} to="/profile">
              Profile
            </NavLink>
          </>
        ) : (
          <>
            <NavLink style={determineStyle} to="/login">
              Login
            </NavLink>
            <NavLink style={determineStyle} to="/register">
              Register
            </NavLink>
          </>
        )}

        <button onClick={toggleTheme}>Toggle Theme!</button>
      </nav>
      <Outlet />
    </div>
  );
}
