import React from "react";
import '../css/PengajarPopUp.css';
import icon from '../icon/sprite.svg';

const PengajarPopUp = ({riwayatGuru, flipCard, isFlip, isPopUp, handleClose}) => {

    const {cardImg, cardNama, cardJabatan, cardRiwayat} = riwayatGuru

    return (
        <div className={`card__container ${isPopUp && 'cardPopUp'}`}>

            <div className="layer-close" onClick={handleClose}></div>

            <div className="card">
                <div className={`card__side card__side--front ${isFlip && 'hideFront'}`}>
                    <div className="card__iconBox card__iconBox-info" onClick={flipCard}>
                        <svg className='card__icon card__icon-info'>
                            <use xlinkHref={`${icon}#icon-info`}></use>
                        </svg>
                    </div>
                    <img src={cardImg} alt={cardNama} className="card__img" />
                    <div className='card__detail'>
                        <h2 className="card__title">{cardNama}</h2>
                        <p className="card__subtitle">{cardJabatan}</p>
                    </div>
                </div>

                <div className={`card__side card__side--back ${isFlip && 'displayBack'}`}>
                    <div className="card__boxTop">
                        <div className="card__iconBox card__iconBox-close" onClick={flipCard}>
                            <svg className='card__icon card__icon-close'>
                                <use xlinkHref={`${icon}#icon-close`}></use>
                            </svg>
                        </div>
                        <div className="card__headingBox">
                            <h2 className="card__nama">{cardNama}</h2>
                            <h3 className="card__jabatan">{cardJabatan}</h3>
                        </div>
                    </div>

                    <div className={`card__boxBottom ${!isFlip && 'hideBoxBottom'}`}>
                        <h1 className="card__heading">Riwayat Pendidikan</h1>
                        <div className="card__rule"></div>
                        <div className="card__riwayatBox">
                            {cardRiwayat.map(item => {
                                const {tahun, gelar, deskripsi} = item
                                return (
                                    <div className="card__riwayat" key={tahun}>
                                        <span className="card__bullet"></span>
                                        <h2 className="card__gelar">{gelar}</h2>
                                        <p className="card__tahun">{tahun}</p>
                                        <p className="card__deskripsi">{deskripsi}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="layer-close" onClick={handleClose}></div>

        </div>
    )
}

export default PengajarPopUp