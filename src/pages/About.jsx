import React, { useState } from "react";
import { dataPengajar } from "../data";
import '../css/About.css';
import ProfileCarousel from "../components/ProfileCarousel";
import PengajarPopUp from "../components/PengajarPopUp";
import ellipse1 from "../images/Ellipse1.png";
import ellipse2 from "../images/Ellipse2.png";
import ellipse4 from "../images/Ellipse4.png";
import ellipse5 from "../images/Ellipse5.png";
import ellipse6 from "../images/Ellipse6.png";
import ellipse7 from "../images/Ellipse7.png";
import E4 from "../images/E4.png";
import E5 from "../images/E5.png";

const About = () => {
    const [riwayatGuru, setRiwayatGuru] = useState({
        cardImg: '',
        cardNama: '',
        cardJabatan: '',
        cardRiwayat: []
    })
    const [isPopUp, setPopUp] = useState(false)
    const [isFlip, setFlip] = useState(false)

    const flipCard = () => {
        setFlip(!isFlip)
    }

    const handleDataFlip = (cardImg, cardNama, cardJabatan, cardRiwayat) => {
        setRiwayatGuru({
            cardImg,
            cardNama,
            cardJabatan,
            cardRiwayat
        })
        setPopUp(!isPopUp)
    }

    const handleClose = () => {
        setPopUp(!isPopUp)
        setTimeout(() => setFlip(false), 300)
        setTimeout(() => setRiwayatGuru({
            cardImg: '',
            cardNama: '',
            cardJabatan: '',
            cardRiwayat: []
        }), 400)
    }

    return (
        <div className="about">
           <div>
               <div className="about__profile">
                   <img src={ellipse2} alt="" className="blur blur__profile blur__profile--1" />
                   <img src={ellipse1} alt="" className="blur blur__profile blur__profile--2" />

                    <ProfileCarousel />
                    <div className="profile__table">
                        <h1 className="font-raleway font-bold text-4xl">Profil Sekolah</h1>
                        <table className="font-nunito font-light mt-4 table-border -ml-2">
                            <tr>
                                <td>Nama Lengkap Sekolah</td>
                                <td>:</td>
                                <td>TK PGRI 05 TEGALAMPEL</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>:</td>
                                <td>Mandiro RT 17, RW 06, Tegalampel, Bondowoso, Indonesia</td>
                            </tr>
                            <tr>
                                <td>Program</td>
                                <td>:</td>
                                <td>Taman Kanak Kanak (TK)</td>
                            </tr>
                            <tr>
                                <td>Waktu Pengelengaraan</td>
                                <td>:</td>
                                <td>Pagi</td>
                            </tr>
                            <tr>
                                <td>Berdiri sejak</td>
                                <td>:</td>
                                <td>Maret 2002</td>
                            </tr>
                            <tr>
                                <td>Luas Tanah</td>
                                <td>:</td>
                                <td>150 M<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Luas Bangunan</td>
                                <td>:</td>
                                <td>84 M<sup>2</sup></td>
                            </tr>
                        </table>
                    </div>
               </div>
           </div>

           <div className="pengajar">
                <img src={ellipse4} alt="" className="blur blur__pengajar" />
                <div className="flex justify-center pengajar__heading">
                    <div className="w-5/12 text-center">
                        <h1 className="font-raleway font-bold text-4xl">Tenaga Pengajar</h1>
                        <p className="font-nunito font-light mt-2 tracking-wide leading-6">Taman Kanak Kanak ini memilliki tenaga pengajar yang sangat baik serta dikelola dengan keorganisasian yang jelas serta terstruktur yang tentunya hal ini berdampak baik bagi keberlangsungan instansi.</p>
                    </div>
                </div>
                <div className="pengajar__container">
                    <img src={E4}  className="absolute -mt-32" alt="" />
                    <img src={E5}  className="absolute -mt-32 right-0" alt="" />
                    {dataPengajar.map((item, i) => {
                        const {srcImg, nama, jabatan, riwayat} = item
                        return (
                            <div className={`pengajar__box pengajar__box-${i+1}`} key={i} onClick={() => handleDataFlip(srcImg, nama, jabatan, riwayat)}>
                                <img src={srcImg} alt={jabatan} className="pengajar__img" />
                                <div className="pengajar__detail">
                                    <h2 className="pengajar__nama">{nama}</h2>
                                    <p className="pengajar__jabatan">{jabatan}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <PengajarPopUp 
                    riwayatGuru={riwayatGuru}
                    flipCard={flipCard}
                    isFlip={isFlip}
                    isPopUp={isPopUp}
                    handleClose={handleClose}
                />
                <div className={`pengajar__overlay ${isPopUp && 'popUpPengajarOverlay'}`} ></div>
           </div>

           <div className="sejarah">
                <img src={ellipse5} alt="" className="blur blur__sejarah blur__sejarah--1" />
                <img src={ellipse6} alt="" className="blur blur__sejarah blur__sejarah--2" />
                <img src={ellipse7} alt="" className="blur blur__sejarah blur__sejarah--3" />
                <div className="flex justify-center sejarah__content">
                    <div className="w-11/12">
                        <h1 className="font-raleway font-bold text-4xl">Sejarah & Background</h1>
                        <div className="mt-5 space-y-6">
                            <p className="font-nunito font-light mt-2 tracking-wide leading-6">TK PGRI 05 TEGALAMPEL didirikan pada tahun 2002 dibawah naungan Yayasan PGRI. Tokoh yang paling berjasa dalam membidani lahirnya TK PGRI 05 TEGALAMPEL adalah Ketua PGRI Kecamatan Tegalampel pada saat itu Bapak Abdul Yadi beserta Pengurus PGRI lainnya. </p>
                            <p className="font-nunito font-light mt-2 tracking-wide leading-6">TK PGRI 05 TEGALAMPEL berdiri karena founder merasa prihatin melihat banyak anak-anak usia 4-6 tahun yang berkerumun tanpa ada aktivitas pembelajaran. Founder lalu menyampaikan kegundahannya kepada tokoh PGRI dan yang kemudian disepakati untuk membuat kelompok belajar dan bermain untuk mengelola kegiatan bermain anak hingga lebih terprogram. Kegiatan awal dilaksanakan di rumah penduduk yaitu Bapak Sunardi dengan menggunakan alat permainan seadanya yang digelar bongkar pasang. Ternyata sambutan masyarakat sangat antusias. </p>
                            <p className="font-nunito font-light mt-2 tracking-wide leading-6">Tanggal 1 Maret 2002, diresmikanlah oleh Ketua PGRI Kecamatan Tegalampel didampingi 3 pengurus lainnya kelompok belajar tersebut dengan nama TK PGRI 05. Sang Founder Esty Susantina, ditunjuk Bapak Ketua PGRI Kecamatan Tegalampel sebagai Kepala Sekolah dan Deviana sebagai guru untuk peserta didik yang berjumlah 29 anak. Langkah berikutnya dilembagakan dan mengajukan perizinan ke Dinas Pendidikan Kota/Kabupaten dengan menyertakan Surat Izin Operasional dari YPLP PGRI TK II KABUPATEN BONDOWOSO nomor 198/ E.1/ Perw.Bo/ IX /2003 tercantum mulai berlaku tanggal 1 Maret 2002. </p>
                        </div>
                    </div>
                </div>
           </div>

           
        </div>
    )
}

export default About