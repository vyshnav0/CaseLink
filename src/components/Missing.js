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
      const imgArr = ["https://i2-prod.mirror.co.uk/incoming/article29680153.ece/ALTERNATES/s1200d/0_Lesley-Trotter.jpg","https://i2-prod.leicestermercury.co.uk/incoming/article8322916.ece/ALTERNATES/s810/0_joan-wooton.jpg","https://kstp.com/wp-content/uploads/2022/05/yvonne-faye-ingram-missing-person.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bGK0kza-G5KfRlPpRdbeASoEZ8EgMRrwzbAUFyC4FOWOT2WEAdhjnM_KxJnOTLsutN4&usqp=CAU","https://13wham.com/resources/media2/16x9/full/1024/center/80/e24b6eaf-0c71-4781-8724-e1d60fe4ff78-large16x9_image_64834412.JPG","https://assets3.cbsnewsstatic.com/hub/i/r/2023/02/23/ac98cb04-bce2-4d44-bbac-6a8ea4ec2d0b/thumbnail/620x636/42d6f57a5db036a437ca14ef3c8d0ab8/fpotbc-aeaaoe4y.jpg?v=f3503a7856c58c20acab4eae8bb1f0f4","https://imageresizer.static9.net.au/DpVF057WMcEG8nWrcS4Gig1tjrQ=/1000x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F01bd8413-dec4-44c4-920d-cf19cfa11836","https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/ptoT3WwUk8sXdlevitI6HNnPYtk=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4Z7QBREIHNF4XMT3R72MOCJXRM.jpg","https://i.cbc.ca/1.6198579.1633344531!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/patricia-levy.jpg"]
      const updatedFullname = data.fname.map((fname, index) => {
        const lname = data.lname[index].lname;
        const age = data.age[index].age;
        const contactno = data.contactno[index].contactno;
        const img = imgArr[index]
        return {fullName: `${fname.fname} ${lname}` , age:age, contactno:contactno , img:img};
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
      imgSrc: name.img,
      title: name.fullName,
      age: name.age, // Update the age as needed
      contactno: name.contactno
    }));
    setMissingPersons(missingPersons);
  }, [fullname]);

  const [missingPersons, setMissingPersons] = useState([]);

  return (
    <>
    <div className='page' >
      <h2 className='mw' >Missing Person</h2>
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
          {missingPersons.map((person, index) => (
            <SwiperSlide key={index}>
              <PersonCard data={person} />
            </SwiperSlide>
          ))}
          {/* {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <PersonCard data={{ imgSrc: 'https://via.placeholder.com/150', title: `Missing Person${index + 1}`, age: '25' }} />
                        </SwiperSlide>
                    ))} */}
        </Swiper>
      </div>
    </div>
    </>
  );
}
