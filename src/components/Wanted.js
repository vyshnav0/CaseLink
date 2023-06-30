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
        const imageArr = ["https://i.insider.com/61fa954fef63e10018101fb5?width=1000&format=jpeg&auto=webp","https://images.foxtv.com/static.fox10phoenix.com/www.fox10phoenix.com/content/uploads/2019/10/764/432/f169cce2-Ricky-Deeley-mug.jpg?ve=1&tl=1","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jeremy_Meeks_Mug_Shot.jpg/330px-Jeremy_Meeks_Mug_Shot.jpg","http://hollywoodlife.com/wp-content/uploads/2009/12/kyle-chrisley-5-things-to-know-about-todde28099s-oldest-son-after-his-latest-arrest-01.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/DaniLeigh-Arrested-Mugshot-MEGA.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/ryan-edwards-mugshots-spl.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/ezra-miller-arrested-in-hawaii-mega-1.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/shutterstock_editorial_12844652a.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/bug-hall-mug-shot.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/jen-hartley-mugshot-embed.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/ynw-melly.jpg?w=680","https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/1212c9e4-b957-4928-a01f-58d51b-x1280.jpg?7Ygd.TOEYroNOcQ0idAwNdo4MYqrouJp","http://hollywoodlife.com/wp-content/uploads/2009/12/jussie-smollett-mugshot-gallery.jpg?w=680"]
        const updatedFullname = data.fname.map((fname, index) => {
            const lname = data.lname[index].lname;
            const age = data.age[index].age;
            const img = imageArr[index]
            console.log(`Image being processed: ${img}`);
            return {fullName: `${fname.fname} ${lname}` , age:age ,img : img};
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
        imgSrc: name.img,
        title: name.fullName,
        age: name.age, // Update the age as needed
        }));
        setWantedPersons(wantedPersons);
    }, [fullname]);

  const [wantedPersons, setWantedPersons] = useState([]);
    return (
        <>
            <div className='page' >
                <h2 className='mw'>Most Wanted</h2>
                <p className='desc'>Please be adviced that the individuals on Most Wanted list are considered dangereous and should not 
                be approached or confronted;or instead if you have any information on thier whereabouts,please contact up the City Police Control Room or call 100</p>
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
