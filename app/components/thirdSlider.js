import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import Image6 from '/public/images/foto_MU/mu_6.jpg';


const ThirdSlider = ()=>{
    return(
        <div className="sliderBodyDiv">
        <div className="sliderDiv">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><Image src={Image6} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        <div className="sliderEmpty"></div>
        </div>
    )
}

export default ThirdSlider