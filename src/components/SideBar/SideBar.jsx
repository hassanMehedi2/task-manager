import { useState } from 'react';
import '../../styles/SideBar.css'
import { Link } from 'react-router-dom';
const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div>
            <div className='profile-photo' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img src={"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg"} alt="user image" />
                <h3>Mehedi hassan</h3>
                {isHovered && (
                    <div className="dropdown">
                        <button className="sign-out-btn">Sign Out</button>
                    </div>
                )}
            </div>
            <div className='menu-container'>
                <Link to={'/'} className='menu-button'>All Tasks</Link>
                <Link to={"/uncompleted"} className='menu-button'>Uncompleted Tasks</Link>
                <Link to={'/completed'} className='menu-button'>Completed Tasks</Link>
                
            </div>
        </div>
    );
};

export default SideBar;