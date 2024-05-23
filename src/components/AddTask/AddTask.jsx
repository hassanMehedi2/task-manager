
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import '../../styles/AddTask.css'
import { FiPlus } from "react-icons/fi";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

//import for modal
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
 
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

const AddTask = () => {
    // modal content 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 // modal content 

    const axios = useAxios();
    const { user } = useContext(AuthContext);

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const status = "uncompleted";
        const userEmail = user?.email;
        const task = { userEmail, title, description, date, status };

        axios.post('http://localhost:5000/api/tasks', task)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast.success('Added task Successfully')
                    e.target.reset();
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })

    }

    return (
        <div>
            <div className='add-task-container'>
                <h2>Add a new task</h2>
                <div onClick={handleOpen} className='add-task-card'>
                    <h4><FiPlus></FiPlus> Add a new Task</h4>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}


                <Modal
                
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={"modal-add"} sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create Task
                        </Typography>
                        <div className="modal-box">
                            <form onSubmit={handleAddTask}>
                                <div className="form-control">
                                    <label >
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Title " required />
                                </div>
                                <div className="form-control">
                                    <label >
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name="description" placeholder="Description " required />
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label>
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="deadline" required />
                                </div>
                                <div className='create-btn'>
                                    <input type='submit' value={'+ Create Task'} />
                                </div>
                            </form>
                           

                        </div>

                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default AddTask;