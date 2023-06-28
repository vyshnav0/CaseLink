import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './PersonCard'
import '../style/Swiper.css'

export default function Wanted(){
    const [fullname, setFullname] = useState([]);
  
    const callWantedPage = async () => {
        try {
        const response = await fetch('http://localhost:5000/obtainwanted', {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await response.json();
        const updatedFullname = data.fname.map((fname, index) => {
            const lname = data.lname[index].lname;
            const age = data.age[index].age;
            return {fullName: `${fname.fname} ${lname}` , age:age};
        });
        setFullname(updatedFullname);
        } catch (err) {
        console.log(err);
        console.log('There was an error during fetching wanted persons details');
        }
    };

    useEffect(() => {
        callWantedPage();
    }, []);

    useEffect(() => {
        const wantedPersons = fullname.map((name, index) => ({
        imgSrc: 'https://via.placeholder.com/150',
        title: name.fullName,
        age: name.age // Update the age as needed
        }));
        setWantedPersons(wantedPersons);
    }, [fullname]);

  const [wantedPersons, setWantedPersons] = useState([]);
    return (
        <>
            <div className='page' >
                <h2 className='mw'>Most Wanted</h2>
                <p className='desc'>Please be adviced that the individuals on Most Wanted list are considered dangereous and should not 
                be approached or confronted;or instead if you have any information on thier whereabouts,please contact appropriate authorities immediately</p>
            <div className= "container py-4 px-4 justify-content-center" >
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
                    delay: 1000,
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
                    {wantedPersons.map((person, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={person} />
                        </SwiperSlide>
                    ))}
                    {/* {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={{ imgSrc: 'https://via.placeholder.com/150', title: `Wanted person${index + 1}`, age: '25' }} />
                        </SwiperSlide>
                    ))} */}
                    
                </Swiper>
            </div>
            </div>
        </>
    )

}
