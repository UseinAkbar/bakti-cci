import React from "react";
import galeriKegiatan from "../gambarKegiatan";
import '../css/Galeri.css';

const GaleriKegiatan = ({handlePopUp}) => {
    return (
        <div className="kegiatan">
            {galeriKegiatan.map(item => {
                const {id, thumbnail, srcGaleri, title, subtitle} = item
                return (
                    <div className="kegiatan__box" key={id} onClick={() => handlePopUp(srcGaleri, title, subtitle)}>
                        <img src={thumbnail} alt={title} className="kegiatan__img" />
                        <div className="kegiatan__desc">
                            <h2>{title}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GaleriKegiatan