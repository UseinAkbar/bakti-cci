import React from "react";
import '../css/GaleriPopUp.css';
import icon from '../icon/sprite.svg'

const GaleriPopUp = ({isPopUp, imgPopUp, titlePopUp, descPopUp, isDisplayDetail, handleDetail}) => {

    return (
        <div className={`galeri__container ${isPopUp && 'popUpContainer'}`}>
            <div className='galeri__iconBox' onClick={handleDetail}>
                <svg className={`galeri__icon galeri__icon-info ${!isDisplayDetail && 'displayInfo'}`}>
                    <use xlinkHref={`${icon}#icon-info`}></use>
                </svg>
                <svg className={`galeri__icon galeri__icon-close ${isDisplayDetail && 'displayClose'}`}>
                    <use xlinkHref={`${icon}#icon-close`}></use>
                </svg>
            </div>
            <div className='galeri__imgBoxPopUp'>
                <img src={imgPopUp} alt={descPopUp} className="galeri__imgPopUp" />
                <div className={`galeri__detail ${isDisplayDetail && 'popUpDetail'}`}>
                    <h2 className="galeri__title">{titlePopUp}</h2>
                    <p className="galeri__desc">{descPopUp}</p>
                </div>
            </div>
        </div>
    )
}

export default GaleriPopUp