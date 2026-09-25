import { createBrowserRouter } from "react-router";
import MainLoyout from "../widgets/MainLoyout";
import { Demo, Home } from "../pages/IndexLazy";


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