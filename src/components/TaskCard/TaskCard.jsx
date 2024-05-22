import '../../styles/TaskCard.css'
import { LuFolderEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useState } from 'react';
//import for modal
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};




const TaskCard = ({ task, handleRemaining }) => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [updatedTask, setUpdatedTask] = useState(task)


    const navigate = useNavigate();
    const axios = useAxios();
    if (!updatedTask) return null;
    const { _id, title, description, date, status } = updatedTask;

    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/api/tasks/${_id}`)
                    .then(data => {
                        console.log(data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/');
                        }
                    })
                    .catch(err => console.log(err))
            }
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const status = task?.status;
        const updatedData = { title, description, date, status };
        axios.patch(`http://localhost:5000/api/tasks/${_id}`, updatedData)
            .then(data => {
                handleClose();
                console.log(data.data);
                if (data.data.acknowledged) {
                    if (data.data.modifiedCount === 0) {
                        Swal.fire("Nothing to Update!");
                    }
                    else {
                        setUpdatedTask(updatedData);
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Post Updated Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })

    }
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
                    <button onClick={handleOpen}><LuFolderEdit /></button>
                    <button onClick={handleDelete}><MdDelete /></button>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={"modal-update"} sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Task
                    </Typography>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label >
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" defaultValue={title} name="title" placeholder="Title " required />
                        </div>
                        <div className="form-control">
                            <label >
                                <span className="label-text">Description</span>
                            </label>
                            <textarea defaultValue={description} name="description" placeholder="Description " required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label>
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" defaultValue={date} name="date" placeholder="deadline" required />
                        </div>
                        <div className='update-task'>
                            <input type='submit' value={'+ Update Task'} />
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default TaskCard;