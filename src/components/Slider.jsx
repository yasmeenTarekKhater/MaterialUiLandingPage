
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SliderBox from "./SliderBox";
const Slider = () => {
    return (
      <header>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderBox s='./slider2.webp'/>
       </SwiperSlide>
       <SwiperSlide>
        <SliderBox s='./slider3.webp' />
       </SwiperSlide>
       <SwiperSlide>
        <SliderBox s='./slider1.webp' />
       </SwiperSlide>
      </Swiper>
      </header>
      
       
   );
}
 
export default Slider;