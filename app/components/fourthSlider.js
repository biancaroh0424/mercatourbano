import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Image6 from '/public/images/foto_MU/mu_6.jpg';
import Image7 from '/public/images/foto_MU/mu_7.jpg';
import Image8 from '/public/images/foto_MU/mu_8.jpg';

const FourthSlider = ()=>{
    return(
        <div className="sliderBodyDiv">
          <div className="sliderEmpty"></div>
        <div className="sliderDiv">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><Image src={Image6} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image7} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image8} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        
        </div>
    )
}

export default FourthSlider