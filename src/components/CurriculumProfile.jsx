import React, { useState } from "react";
import {thumbnailKurikulum, detailKurikulum} from '../kurikulum.js'

const CurriculumProfile = () => {    

    const thumbHandler = (i) => {
        handleContent(i)
        handleThumb(i)
    }

    const handleContent = (i) => {
        const kurikulumKonten = [...document.querySelectorAll('.kurikulum__detail')]
        
        if(!kurikulumKonten[i].classList.contains('activeDetail'))
            kurikulumKonten[i].classList.toggle('activeDetail')
            kurikulumKonten.filter(item => item !== kurikulumKonten[i]).forEach(item => item.classList.remove('activeDetail'))

    }

    const handleThumb = (i) => {
        const thumbs = [...document.querySelectorAll('.kurikulum__thumb')]

        if(!thumbs[i].classList.contains('activeThumb')) {
            thumbs[i].classList.toggle('activeThumb')
            thumbs.filter(item => item !== thumbs[i]).forEach(item => item.classList.remove('activeThumb'))
        }
    }

    return (
        <div className="kurikulum__profile">
            <div className="kurikulum__boxThumb">
                    {thumbnailKurikulum.map((item, i) => {
                        return (
                            <div className={`kurikulum__thumb ${i === 0 && 'activeThumb'}`} onClick={() => thumbHandler(i)}>
                                <img src={item} alt="" className="kurikulum__thumbImg" />
                            </div>
                        )
                    })}
                </div>
                {detailKurikulum.map((item, i) => {
                    const {img, title, pembuka, inti, penutup, listPenutup} = item
                    return (
                        <div className={`kurikulum__detail kurikulum__detail-${i+1} ${i === 0 && 'activeDetail'}`}>
                            <div className="kurikulum__boxImg">
                                <img src={img} alt={title} className="kurikulum__img" />
                            </div>
                            <div className="kurikulum__title">
                                <h2>Kurikulum :</h2>
                                <h1 className="title">{title}</h1>
                            </div>
                            <div className="kurikulum__desc">
                                <div className="pembuka">
                                    <h1>Kegiatan Pembuka</h1>
                                    <p>{pembuka}</p>
                                </div>
                                <div className="inti">
                                    <h1>Kegiatan Inti</h1>
                                    <p>{inti}</p>
                                </div>
                                <div className="penutup">
                                    <h1>Kegiatan Penutup</h1>
                                    <p>{penutup}</p>
                                    <ol>
                                        {listPenutup.map(item => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default CurriculumProfile