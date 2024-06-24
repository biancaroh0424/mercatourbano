import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Image1 from '/public/images/foto_MU/mu_1.jpg';
import Image2 from '/public/images/foto_MU/mu_2.jpg';
import Image3 from '/public/images/foto_MU/mu_3.jpg';


const FirstSlider = ()=>{
    return(
        <div className="sliderBodyDiv">
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
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><Image src={Image1} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image2} alt="" /></SwiperSlide>
          <SwiperSlide><Image src={Image3} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        <div className="sliderEmpty"></div>
        </div>
    )
}

export default FirstSlider