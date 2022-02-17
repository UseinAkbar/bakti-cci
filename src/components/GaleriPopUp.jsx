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

const GaleriPopUp = ({isPopUp, imgPopUp, detailPopUp, isDisplayDetail, handleDetail}) => {
    const {title, subTitle, tema, subTema, subSubTema} = detailPopUp

    return (
        <div className={`galeri__swiper ${isPopUp && 'popUpSwiper'}`}>
            <Swiper
                navigation={imgPopUp.length > 1 && true}
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
                            <div className='galeri__container'>
                                <div className='galeri__iconBox' onClick={handleDetail}>
                                    <svg className={`galeri__icon galeri__icon-info ${!isDisplayDetail && 'displayInfo'}`}>
                                        <use xlinkHref={`${icon}#icon-info`}></use>
                                    </svg>
                                    <svg className={`galeri__icon galeri__icon-close ${isDisplayDetail && 'displayClose'}`}>
                                        <use xlinkHref={`${icon}#icon-close`}></use>
                                    </svg>
                                </div>
                                <div className='galeri__imgBoxPopUp'>
                                    <img src={item} alt={subTitle} className="galeri__imgPopUp" />
                                    {tema ? 
                                    <div className={`galeri__detail galeri__detail-lengkap ${isDisplayDetail && 'popUpDetail'}`}>
                                        <div className="galeri__titleBox">
                                            <h2 className="galeri__title">{title}</h2>
                                            <p className="galeri__desc">{subTitle}</p>                                         
                                        </div>
                                        {/* <div className="galeri__detail-border"></div> */}
                                        <div className="galeri__temaBox">
                                            <table>
                                                <tr>
                                                    <td>Tema</td>
                                                    <td>:</td>
                                                    <td>{tema}</td>
                                                </tr> 
                                                <tr>
                                                    <td>Sub-tema</td>
                                                    <td>:</td>
                                                    <td>{subTema}</td>
                                                </tr>  
                                                <tr>
                                                    <td>Sub-sub-tema</td>
                                                    <td>:</td>
                                                    <td>{subSubTema}</td>
                                                </tr>                                                 
                                            </table>
                                        </div>
                                    </div>
                                    : <div className={`galeri__detail ${isDisplayDetail && 'popUpDetail'}`}>
                                        <h2 className="galeri__title">{title}</h2>
                                        <p className="galeri__desc">{subTitle}</p>
                                    </div>
                                    }       
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