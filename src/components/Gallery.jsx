import React from "react";
import '../css/Galeri.css'
import { galeri } from "../data";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css';
// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const Gallery = ({handlePopUp}) => {

    return (
        <Swiper
            navigation
            spaceBetween={10}
            slidesPerView={4}
            // autoplay={{delay: 1800, disableOnInteraction: false}}
            loop
            className="galeri__carousel"
        >
            {galeri.map(item => {
                const {id, srcGaleri, title, desc} = item
                return (
                    <SwiperSlide key={id}>
                        <div className="galeri__imgBox" onClick={() => handlePopUp(srcGaleri, title, desc)}>
                            <img src={srcGaleri} className="galeri__img" alt="Foto Aktivitas Murid TK 05 TegalAmpel"/>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Gallery