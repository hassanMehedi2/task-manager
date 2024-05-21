
import TaskCard from '../../components/TaskCard/TaskCard';
import '../../styles/AllTasks.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const AllTasks = () => {
    return (
        <div className="all-task-section">
            <h2>All Tasks</h2>
            
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


                <SwiperSlide >
                    <TaskCard></TaskCard>
                </SwiperSlide>
                )



                <SwiperSlide >
                    <TaskCard></TaskCard>
                </SwiperSlide>  <SwiperSlide >
                    <TaskCard></TaskCard>
                </SwiperSlide>  <SwiperSlide >
                    <TaskCard></TaskCard>
                </SwiperSlide>  <SwiperSlide >
                    <TaskCard></TaskCard>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="" alt="image missing" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="image missing" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="image missing" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="image missing" />
                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default AllTasks;