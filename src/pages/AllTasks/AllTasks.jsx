
import TaskCard from '../../components/TaskCard/TaskCard';
import '../../styles/AllTasks.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useContext, useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../provider/AuthProvider';
import useWindowSize from '../../hooks/useWindowSize';


const AllTasks = () => {
    const {user,loading} = useContext(AuthContext);
    const [tasks, setTasks] = useState(null);
    const axios = useAxios(null);
    const email = user?.email;
    const windowSize = useWindowSize(null);

    useEffect(() => {
        if (user && user.email) {
        axios.get(`/api/tasks/${email}`)
            .then(data => {
                console.log(data.data);
                setTasks(data.data)
            })
            .catch(err => console.log(err))
        }
    }, [axios,user,email,loading])

    const handleRemaining = (id)=>{
        const remaining = tasks?.filter(task=> task._id !== id);
        setTasks(remaining);
    }

    return (
        <div className="all-task-section">
            <h2>All Tasks</h2>
            {!user && <div className='no-task-div'><p>Please Login</p> </div>
            }
            {user && tasks?.length === 0 && <div className='no-task-div'><p>No task available</p> </div>
            }

            {
                windowSize.width  <= 767 ? 
                <div className='tasks-container-mobile'>
               {     tasks?.map(task => <TaskCard key={task._id} task= {task} handleRemaining={handleRemaining}></TaskCard>)}
                </div>  
           
           :  <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    374: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 13,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 13,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"

            >

                {
                    tasks?.map(task => 
                    <SwiperSlide key={task._id}>
                        <TaskCard task= {task} handleRemaining={handleRemaining}></TaskCard>
                    </SwiperSlide>)
                }
            </Swiper> 
             }
        </div>
    );
};

export default AllTasks;