import { Outlet } from 'react-router-dom';
import AddTask from '../components/AddTask/AddTask';
import SideBar from '../components/SideBar/SideBar';
import '../styles/MainLayout.css'
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="sidebar">
                <SideBar></SideBar>
            </div>
            <div className='main-container'>

                <AddTask></AddTask>

                <div className='main-outlet'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default MainLayout;