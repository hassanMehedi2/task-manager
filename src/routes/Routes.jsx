import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllTasks from "../pages/AllTasks/AllTasks";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <AllTasks></AllTasks>
            }
        ]
    }
])
export default routes;