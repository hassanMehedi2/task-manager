import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AllTasks from "../pages/AllTasks/AllTasks";
import Uncompleted from "../pages/Uncompleted/Uncompleted";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import Completed from "../pages/Completed/Completed";

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
            },
            {
                path: '/tasks/:id',
                element: <TaskDetails></TaskDetails>
            }
            ,
            {
                path: '/completed',
                element:<Completed></Completed>
            }
        ]
    },
    {
        path:'/api/users/login',
        element:<Login></Login>
    },
    {
        path:'/api/users/signup',
        element:<SignUp></SignUp>
    }
])
export default routes;