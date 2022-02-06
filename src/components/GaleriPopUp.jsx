import React from "react";
import '../css/GaleriPopUp.css';
import icon from '../icon/sprite.svg'
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css';
// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const GaleriPopUp = ({isPopUp, imgPopUp, titlePopUp, descPopUp, isDisplayDetail, handleDetail}) => {
    console.log(imgPopUp);

    return (
        <div className={`galeri__swiper ${isPopUp && 'popUpSwiper'}`}>
            <Swiper
                navigation
                spaceBetween={10}
                slidesPerView={1}
                initialSlide={0}
                centeredSlides={true}
                // autoplay={{delay: 1800, disableOnInteraction: false}}
                loop
                className='galeri__swiper--container'
            >
                {imgPopUp.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className={`galeri__container`}>
                                <div className='galeri__iconBox' onClick={handleDetail}>
                                    <svg className={`galeri__icon galeri__icon-info ${!isDisplayDetail && 'displayInfo'}`}>
                                        <use xlinkHref={`${icon}#icon-info`}></use>
                                    </svg>
                                    <svg className={`galeri__icon galeri__icon-close ${isDisplayDetail && 'displayClose'}`}>
                                        <use xlinkHref={`${icon}#icon-close`}></use>
                                    </svg>
                                </div>
                                <div className='galeri__imgBoxPopUp'>
                                    <img src={item} alt={descPopUp} className="galeri__imgPopUp" />
                                    <div className={`galeri__detail ${isDisplayDetail && 'popUpDetail'}`}>
                                        <h2 className="galeri__title">{titlePopUp}</h2>
                                        <p className="galeri__desc">{descPopUp}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default GaleriPopUp