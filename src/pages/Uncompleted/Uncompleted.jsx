



    import TaskCard from '../../components/TaskCard/TaskCard';
    import '../../styles/AllTasks.css'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination } from 'swiper/modules';
    import { useContext, useEffect, useState } from 'react';
    import useAxios from '../../hooks/useAxios';
    import { AuthContext } from '../../provider/AuthProvider';
    
    
    const Uncompleted = () => {
        const {user} = useContext(AuthContext);
        const [tasks, setTasks] = useState({completed:[],uncompleted:[]});
        const axios = useAxios();
        const email = user?.email;
        useEffect(() => {
            axios.get(`http://localhost:5000/api/tasks?email=${email}`)
                .then(data => {
                    console.log(data.data);
                    setTasks(data.data)
                })
                .catch(err => console.log(err))
        }, [axios,email])
    
        const handleRemaining = (id)=>{
            const remaining = tasks?.uncompleted.filter(task=> task._id !== id);
            setTasks(remaining);
        }
    
        return (
            <div className="all-task-section">
                <h2>Uncompleted Tasks</h2>
                {!user && <div className='no-task-div'><p>Please Login</p> </div>
            }
            {user && tasks?.uncompleted.length === 0 && <div className='no-task-div'><p>No task available</p> </div>
            }
                <Swiper
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
                            slidesPerView: 3,
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
                        tasks?.uncompleted?.map(task => 
                        <SwiperSlide key={task._id}>
                            <TaskCard task= {task} handleRemaining={handleRemaining}></TaskCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        );
    };
    
  
export default Uncompleted;