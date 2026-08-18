import { RouterProvider } from "react-router-dom"
import routers from "../routers/routers";

const AppRouterProvider = () =>{
    return <RouterProvider router={routers}></RouterProvider>
}

export default AppRouterProvider;