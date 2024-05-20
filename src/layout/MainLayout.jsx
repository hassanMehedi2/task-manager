import { Outlet } from 'react-router-dom';
import AddTask from '../components/AddTask/AddTask';
import SideBar from '../components/SideBar/SideBar';
import '../styles/MainLayout.css'
const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="sidebar">
                <SideBar></SideBar>
            </div>
            <div className='main-container'>
              
                    <AddTask></AddTask>
               
               <div>
                <Outlet></Outlet>
               </div>
            </div>
        </div>
    );
};

export default MainLayout;