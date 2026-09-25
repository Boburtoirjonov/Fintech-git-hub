import { Outlet } from "react-router"
import Header from "./Header"

function MainLoyout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLoyout