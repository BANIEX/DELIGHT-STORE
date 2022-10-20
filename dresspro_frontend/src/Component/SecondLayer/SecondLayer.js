import "./SecondLayer.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SecondLayer(){
  return (
    <Swiper
      className="swiper1"
      modules={[Autoplay, Pagination, Navigation]}
      // spaceBetween={50}
      slidesPerView={1}
     
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide id="slide0">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide1">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide id="slide2">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide3">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide4">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide5">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide6">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide7">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide8">
        <div className="swiper-slide">
          <div className="text-container-div">
            <div className="explore">EXPLORE</div>
            <div className="your">YOUR</div>
            <div className="true">TRUE</div>
            <div className="style">STYLE</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}