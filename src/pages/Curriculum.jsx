import React, { useState } from "react";
import CurriculumProfile from "../components/CurriculumProfile.jsx";
import '../css/Curriculum.css';

const Curriculum = () => {
    
    return (
        <div>
            <div className="kurikulum">
                <CurriculumProfile />
            </div>
            <div className='mt-10 bg-green-100 kurikulum'>
                <h1 className="font-bold text-5xl font-raleway p-6">Alokasi Waktu</h1>
                <section className="container mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-md font-semibold tracking-wide text-gray-900 bg-yellow-100 text-xl text-center border-gray-600">
                                <th className="py-7 w-1/4">Nama Kegiatan</th>
                                <th className="py-7 w-1/4">Alokasi Waktu</th>
                                <th className="py-7 w-2/4">Keterangan</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Minggu efektif belajar
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Minimum 36 minggu dan Maksimum 38 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Digunakan untuk kegiatan pembelajaran efektif pada setiap satuan pendidikan.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Jeda antar semester
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Maksimum 2 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Antara semester I dan II.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Liburan akhir tahun pelajaran
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Maksimum 3 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Digunakan untuk penyiapan kegiatan dan administrasi akhir dan awal tahun pelajaran.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Hari libur keagamaan
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    2-4 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Daerah khusus yang memerlukan libur keagamaan lebih panjang dapat mengaturnya sendiri tanpa mengurangi jumlah minggu efektif belajar dan waktu pembelajaran efektif.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Hari libur umum / Nasional
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Maksimum 2 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Disesuaikan dengan peraturan pemerintah.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Hari libur khusus
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Maksimum 1 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Untuk satuan pendidikan sesuai dengan ciri kekhususan masing masing.
                                </td>
                            </tr>
                            <tr className="text-gray-700 ">
                                <td className="px-4 py-6 border-r font-semibold">
                                    Kegiatan khusus sekolah
                                </td>
                                <td className="px-4 py-6 text-ms border-r">
                                    Maksimum 3 minggu
                                </td>
                                <td className="px-4 py-6 text-base ">
                                    Digunakan untuk kegiatan yang diprogramkan secara khusus oleh sekolah tanpa mengurangi jumlah minggu efektif belajar dan waktu pembelajaran efektif
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Curriculum