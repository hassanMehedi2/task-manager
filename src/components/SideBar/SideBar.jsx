import { useState } from 'react';
import '../../styles/SideBar.css'
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
                <button className='menu-button'>All Tasks</button>
                <button className='menu-button'>Uncompleted Tasks</button>
                <button className='menu-button'>Completed Tasks</button>
                
            </div>
        </div>
    );
};

export default SideBar;