import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          Logo
        </h1>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Demo
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
