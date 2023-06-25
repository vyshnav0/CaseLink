import React from 'react'
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './PersonCard'


export default function Missing(){
    const missingPersons = [
        // Replace this array with actual data from your "missing" database
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 1', age: '25' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 2', age: '30' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 3', age: '35' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 4', age: '40' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 5', age: '45' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 6', age: '50' },
        { imgSrc: 'https://via.placeholder.com/150', title: 'Missing person 7', age: '55' },
        // Add more entries as needed
      ];
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
            
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, FreeMode, Navigation]}
                className = "mySwiper"
                >
                    {/* CHANGE THE BELOW TO TAKE THE RECENT 7 INPUTS FROM THE MISSING DB.*/} 
                    
                    {/* {[...Array(7)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={{ imgSrc: 'https://via.placeholder.com/150', title: `Missing person${index + 1}`, age: '25' }} />
                        </SwiperSlide>
                    ))} */}
                {missingPersons.map((person, index) => (
            <SwiperSlide key={index}>
              <PersonCard data={person} />
            </SwiperSlide>
          ))}

                </Swiper>
            </div>
        </>
    )

}
