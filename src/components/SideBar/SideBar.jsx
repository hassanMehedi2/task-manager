import { useContext} from 'react';
import '../../styles/SideBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
const SideBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out');
                navigate('/api/users/login')
                toast.success("logged out successfully")
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage)

            });

    }

    const sliceBeforeFirstSpace =(str) =>{
        const parts = str.split(/\s(.+)/);
      
        return parts[0];
      }

    return (
        <div className='sidebar-section'>
            <div className='profile-section' >

                <img src={"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg"} alt="user image" />
                {user?.displayName ? <h3 className='user-name'>{sliceBeforeFirstSpace(user?.displayName)}</h3> : <h3 className='user-name'>User</h3>}


            </div>
            <div className='dropdown-menuu'>
                <DropdownMenu></DropdownMenu>
            </div>
            <div className='menu-container'>
                <Link to={'/'} className='menu-button'>All Tasks</Link>
                <Link to={"/uncompleted"} className='menu-button'>Uncompleted</Link>
                <Link to={'/completed'} className='menu-button'>Completed</Link>

            </div>
            <div className='login-btn'>
                {
                    user ? <Link onClick={handleLogOut} className="login-link">Log Out <CiLogin /></Link>
                        : <Link to={'/api/users/login'} className="login-link">Login <CiLogin /></Link>
                }
            </div>

        </div>
    );
};

export default SideBar;