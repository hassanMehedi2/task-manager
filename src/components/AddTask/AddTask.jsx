
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
import '../../styles/AddTask.css'
import { FiPlus } from "react-icons/fi";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const AddTask = () => {
    const axios = useAxios();
    const {user} = useContext(AuthContext);

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const status = "uncompleted";
        const userEmail = user?.email;
        const task = {userEmail,title,description,date,status};

        axios.post('http://localhost:5000/api/tasks',task)
        .then(data=>{
            console.log(data.data);
            if (data.data.insertedId) {
                toast.success('Added task Successfully')
                e.target.reset();
                
            }
        })
        .catch(error =>{
             console.log(error);
             toast.error(error.message)
        })

    }

    return (
        <div>
            <div className='add-task-container'>
                <h2>Add a new task</h2>
                <div onClick={() => document.getElementById('my_modal_5').showModal()} className='add-task-card'>
                    <h4><FiPlus></FiPlus> Add a new Task</h4>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h2>Add a task</h2>
                        <form onSubmit={handleAddTask}>
                            <div className="form-control">
                                <label >
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title"  placeholder="Title " required />
                            </div>
                            <div className="form-control">
                                <label >
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea  name="description"  placeholder="Description " required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                            <label>
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="deadline"  required />
                        </div>
                         <div className='create-btn'>
                            <input type='submit'  value={'+ Create Task'}/>
                        </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog" className="modal-backdrop">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                           
                        </div>
                        
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddTask;