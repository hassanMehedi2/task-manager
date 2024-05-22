import '../../styles/TaskCard.css'
import { LuFolderEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const TaskCard = ({ task }) => {
    if (!task) return null;
    const {_id, title, description, date, status } = task;
    return (
        <div className={`task-card ${status === 'uncompleted' ? 'uncompleted' : ''}`}>
            <h4 >{title} </h4>
            <p className='description'>
                 {description.slice(0, 60)}
                {description.length > 60 ? '  ...' : null}</p>
            <p className='task-date'>date : {date}</p>
            <p>status : {status}</p>
            <div className='button-container'>
                <Link to={`api/tasks/${_id}`} className='details-btn'>View Details</Link>
               <div className='btn-icon'>
               <button><LuFolderEdit /></button>
                <button><MdDelete /></button>
               </div>
            </div>
        </div>
    );
};

export default TaskCard;