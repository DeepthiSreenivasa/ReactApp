import { createBrowserRouter } from "react-router-dom";
import Login from "../../features/auth/pages/Login";
import Dashboard from "../../features/dashboard/pages/Dashboard";
import Markets from "../../features/markets/pages/Market";
import Watchlists from "../../features/watchlist/pages/Watchlist";


const routers = createBrowserRouter([{
    path:"login",
    element:<Login/>
},
{
    path:"dashboard",
    element:<Dashboard/>
},
{
    path:"markets",
    element:<Markets/>
},
{
    path:"watchlist",
    element:<Watchlists/>
}])

export default routers;

