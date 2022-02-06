import React from "react";
import '../css/Galeri.css'
import { galeriAktivitas } from "../data";
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
            freeMode={true}
            autoplay={{delay: 1900, disableOnInteraction: false}}
            loop
            className="galeri__carousel"
        >
            {galeriAktivitas.map(item => {
                const {id, thumbnail, srcGaleri, title, desc} = item
                return (
                    <SwiperSlide key={id}>
                        <div className="galeri__imgBox" onClick={() => handlePopUp(srcGaleri, title, desc)}>
                            <img src={thumbnail} className="galeri__img" alt="Foto Aktivitas Murid TK 05 TegalAmpel"/>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Gallery