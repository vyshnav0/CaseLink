import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './PersonCard';
import '../style/Swiper.css'

export default function Missing() {
  const [fullname, setFullname] = useState([]);
  
  const callMissingPage = async () => {
    try {
      const response = await fetch('http://localhost:5000/obtainmissing', {
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
      console.log('There was an error during fetching missing persons details');
    }
  };

  useEffect(() => {
    callMissingPage();
  }, []);

  useEffect(() => {
    const missingPersons = fullname.map((name, index) => ({
      imgSrc: 'https://via.placeholder.com/150',
      title: name.fullName,
      age: name.age // Update the age as needed
    }));
    setMissingPersons(missingPersons);
  }, [fullname]);

  const [missingPersons, setMissingPersons] = useState([]);

  return (
    <>
    <div className='page' >
      <h2 class='mw' >Missing Person</h2>
      <p className='desc'>In case you have any information regarding Missing Persons given below please call up the City Police Control Room or call 100</p>
      <div className="container py-4 px-4 justify-content-center " >
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay:1000,
            disableonInteraction:false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, FreeMode, Navigation]}
          className="mySwiper"
        >
          {/*{missingPersons.map((person, index) => (
            <SwiperSlide key={index}>
              <PersonCard data={person} />
            </SwiperSlide>
          ))}*/}
          {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={{ imgSrc: 'https://via.placeholder.com/150', title: `Missing Person${index + 1}`, age: '25' }} />
                        </SwiperSlide>
                    ))}
        </Swiper>
      </div>
    </div>
    </>
  );
}
