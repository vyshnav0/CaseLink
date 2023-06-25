import React from 'react'
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './PersonCard'


export default function Missing(){
    return (
        <>
            <div className= "container py-4 px-4 justify-content-center bg-secondary" style={{ maxWidth: '70%' }}>
                <Swiper
                breakpoints = {{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480:{
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768:{
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280:{
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                freeMode = {true}
                grabCursor = {true}
                autoplay={{
                    delay: 900,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, FreeMode, Navigation]}
                className = "mySwiper"
                >
                    {/* CHANGE THE BELOW TO TAKE THE RECENT 7 INPUTS FROM THE MISSING DB.*/} 
                    
                    {[...Array(7)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={{ imgSrc: 'https://via.placeholder.com/150', title: `Missing person${index + 1}`, age: '25' }} />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </>
    )

}
