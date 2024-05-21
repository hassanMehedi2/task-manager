
import '../../styles/AddTask.css'
import { FiPlus } from "react-icons/fi";
const AddTask = () => {

    const handleAddTask = () => {

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
                        <form >
                            <div className="form-control">
                                <label >
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="Title"  placeholder="Title " required />
                            </div>
                            <div className="form-control">
                                <label >
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea  name="Description"  placeholder="Description " required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                            <label>
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="deadline"  required />
                        </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog" className="modal-backdrop">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            <div className='create-btn'>
                            <button >+ Create Task</button>
                        </div>
                        </div>
                        
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddTask;