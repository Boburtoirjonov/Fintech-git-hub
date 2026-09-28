import { NavLink } from "react-router";

function Header() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to={"/demo"}>Demo</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
