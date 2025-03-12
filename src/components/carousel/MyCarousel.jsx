import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';


import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";

const MyCarousel = () => {
  console.log(client1); // Check if the path is correct

  return (
    <Swiper
   
      navigation ={false}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 2 seconds
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      
    >
      <SwiperSlide><img src={client1} alt="Slide 1" style={{ width: "100%", height: "200px", objectFit: "cover" }} /></SwiperSlide>
      <SwiperSlide><img src={client2} alt="Slide 2" style={{ width: "100%", height: "200px", objectFit: "cover" }}/></SwiperSlide>
      <SwiperSlide><img src={client3} alt="Slide 3" style={{ width: "100%", height: "200px", objectFit: "cover" }}/></SwiperSlide>
      <SwiperSlide><img src={client4} alt="Slide 4" style={{ width: "100%", height: "200px", objectFit: "cover" }}/></SwiperSlide>
      <SwiperSlide><img src={client5} alt="Slide 5" style={{ width: "100%", height: "200px", objectFit: "cover" }}/></SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
