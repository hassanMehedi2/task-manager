import '../../styles/TaskCard.css'
import { LuFolderEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
const TaskCard = () => {
    return (
        <div className='task-card'>
        <h4 >i have to do a real job </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ur sintores! Accusamus, incidunt.</p>
        <p className='task-date'>date : 15/2/1245</p>
        <p>status : Incomplete</p>
        <div className='button-container'>
            <button><LuFolderEdit /></button>
            <button><MdDelete /></button>
        </div>
    </div>
    );
};

export default TaskCard;