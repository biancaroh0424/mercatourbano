import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Image3 from '/public/images/foto_MU/mu_3.jpg';
import Image4 from '/public/images/foto_MU/mu_4.jpg';
import Image5 from '/public/images/foto_MU/mu_5.jpg';

const SecondSlider = ()=>{
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
          <SwiperSlide><Image src={Image3} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image4} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image5} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        
        </div>
    )
}

export default SecondSlider