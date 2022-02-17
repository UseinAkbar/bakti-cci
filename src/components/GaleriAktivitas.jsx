import React from "react";
import '../css/Galeri.css'
import galeriKelas from "../gambarKelas.js";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css';
// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const GaleriAktivitas = ({handlePopUp}) => {

    return (
        <Swiper
            navigation
            spaceBetween={10}
            slidesPerView={4}
            // autoplay={{delay: 1900, disableOnInteraction: false}}
            loop
            className="galeri__carousel"
        >
            {galeriKelas.map(item => {
                const {id, thumbnail, srcGaleri, title, subtitle, tema, subTema, subSubTema} = item
                return (
                    <SwiperSlide key={id}>
                        <div className="galeri__imgBox" onClick={() => handlePopUp(srcGaleri, title, subtitle, tema, subTema, subSubTema)}>
                            <img src={thumbnail} className="galeri__img" alt="Foto Aktivitas Murid TK 05 TegalAmpel"/>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default GaleriAktivitas