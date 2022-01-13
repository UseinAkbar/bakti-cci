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
                const {id, srcProfil, desc} = item
                return (
                    <SwiperSlide key={id}>
                        <div className="about__imgBox">
                            <img src={srcProfil} className="about__img" alt={desc}/>
                            <div className="about__descBox">
                                <p className="about__desc">{desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ProfileCarousel