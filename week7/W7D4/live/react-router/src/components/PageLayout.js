import { NavLink, Outlet } from "react-router-dom";

export function PageLayout() {
  const determineStyle = ({ isActive }) => {
    console.log(isActive);
    return {
      color: isActive ? "darkblue" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div>
      <nav>
        <NavLink style={determineStyle} to="/">
          Home
        </NavLink>
        <NavLink style={determineStyle} to="/about">
          About
        </NavLink>
        <NavLink style={determineStyle} to="/pokemon">
          Pokemon
        </NavLink>
      </nav>
      <Outlet />
      <footer>Made by Ironhack</footer>
    </div>
  );
}
