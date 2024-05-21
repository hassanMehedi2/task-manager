import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllTasks from "../pages/AllTasks/AllTasks";
import Uncompleted from "../pages/Uncompleted/Uncompleted";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <AllTasks></AllTasks>
            },
            {
                path: "/uncompleted",
                element: <Uncompleted></Uncompleted>
            }
        ]
    }
])
export default routes;