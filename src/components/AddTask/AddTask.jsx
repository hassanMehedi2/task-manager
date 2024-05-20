
import '../../styles/AddTask.css'
import { FiPlus } from "react-icons/fi";
const AddTask = () => {
    return (
        <div>
            <div className='add-task-container'>
                <div className='add-task-card'>
                    <h4><FiPlus></FiPlus> Add a new Task</h4>
                </div>
            </div>
        </div>
    );
};

export default AddTask;