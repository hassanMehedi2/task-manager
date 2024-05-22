import { useEffect, useState } from 'react';
import '../../styles/TaskDetails.css'
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import { LuFolderEdit } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';

const TaskDetails = () => {
    const [task, setTask] = useState(null);
    const axios = useAxios();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/tasks?id=${id}`)
            .then(res => {
                console.log(res);
                setTask(res.data[0]);
                console.log(task);
            })
            .catch(err => console.log(err))
    }, [axios])
    if (!task) return null;
    const { _id, title, description, date, status } = task;
    return (
        <div className='task-details'>
            <h2>Task Details</h2>
            <div className='task-container'>
                <div className='details-section'>
                    <h4 className='task-title'> {title}</h4>
                    <div className='description'>
                        <h3 className='field-title'>Description</h3>
                        <p>{description}</p>
                    </div>
                    <div className='date'>
                        <h3 className='field-title'>Date : </h3>
                        <p>{date}</p>
                    </div>
                    <div className='status'>
                        <h3 className='field-title'>Status : </h3>
                        <p className={`status-text ${status === "uncompleted" ? "uncompleted" : ""}`}> {status}</p>
                    </div>
                </div>
                <div className='btn-section'>
                    <button className={`btn-complete ${status === "completed" ? "make-uncompleted" : ""}`}>{status === "completed" ? "Mark as Uncompleted" : "Mark as Completed"}</button>

                    <div className='btn-icon'>
                        <button className='update-btn'>Update <LuFolderEdit /></button>
                        <button className='delete-btn'>Delete <MdDelete /></button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default TaskDetails;