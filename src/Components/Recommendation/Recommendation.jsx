import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Recommendation = () => {

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetch('recommends.json')
            .then(res => res.json())
            .then(data => setRecommendations(data));
    }, [])

    return (
        <div className="py-10">
            <SectionTitle
                subheading='Follow tips! Stay strong!'
                heading='Here are some tips to follow'
            ></SectionTitle>

            <Swiper
                
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    recommendations.map(item => <SwiperSlide key={item._id}>
                        <img src={item.image} className="h-[200px]" alt="" />
                        <h3 className='text-center text-sm pb-10 mt-4'>{item.recommendations}</h3>
                    </SwiperSlide>)
                }



            </Swiper>
        </div>
    );
};

export default Recommendation;