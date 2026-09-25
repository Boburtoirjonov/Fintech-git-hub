import { NavLink } from "react-router"

function Header() {
  return (
    <div>
        <h1>Logo</h1>
        <ul>
            <NavLink to={"/demo"}>
                Demo
            </NavLink>
        </ul>
    </div>
  )
}

export default Header