import {profile} from "../data";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css';
// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const ProfileCarousel = () => {
    return (
        <Swiper
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="about__carousel"
        >
            {profile.map(item => {
                const {id, srcProfil, srcProfilDetail, desc} = item
                return (
                    <SwiperSlide>
                        <img src={srcProfil} className="about__img" alt={desc}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ProfileCarousel