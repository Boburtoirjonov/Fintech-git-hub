import { createBrowserRouter } from "react-router";
import MainLoyout from "../widgets/MainLoyout";
import Home from "../pages/Home";
import Demo from "../pages/Demo";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLoyout/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path: "/demo",
                element: <Demo/>
            }
        ]
    }
]) 