import React from "react";
import { dataPengajar } from "../data";
import '../css/About.css';
import ProfileCarousel from "../components/ProfileCarousel";

const About = () => {

    return (
        <div className="about">
           <div>
               <div className="about__profile">
                    <ProfileCarousel />
                    <div className="">
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
                <div className="flex justify-center pengajar__heading">
                    <div className="w-5/12 text-center">
                        <h1 className="font-raleway font-bold text-4xl">Tenaga Pengajar</h1>
                        <p className="font-nunito font-light mt-2 tracking-wide leading-6">Taman Kanak Kanak ini memilliki tenaga pengajar yang sangat baik serta dikelola dengan keorganisasian yang jelas serta terstruktur yang tentunya hal ini berdampak baik bagi keberlangsungan instansi.</p>
                    </div>
                </div>
                <div className="pengajar__container">
                    {dataPengajar.map((item, i) => {
                        const {srcImg, nama, jabatan} = item
                        return (
                            <div className={`pengajar__box pengajar__box-${i+1}`} key={i}>
                                <img src={srcImg} alt={jabatan} className="pengajar__img" />
                                <div className="pengajar__detail">
                                    <h2 className="pengajar__nama">{nama}</h2>
                                    <p className="pengajar__jabatan">{jabatan}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
           </div>

           <div className="sejarah">
                <div className="flex justify-center">
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