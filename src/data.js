// import galeri1 from './images/galeri_1.png'
// import galeri2 from './images/galeri_2.png'
// import galeri3 from './images/galeri_3.png'
// import galeri4 from './images/galeri_4.png'
// import dummmy1 from './images/galeri_2.png'
// import dummmy2 from './images/galeri_3.png'
// import dummmy3 from './images/galeri_4.png'
// import dummmy4 from './images/galeri_1.png'

import profil1 from './images/profil_1.png'
import profil2 from './images/profil_2.png'
import profil3 from './images/profil_3.png'

import kepalaSekolah from './images/albumGuru/kepsek.png';
import bendahara from './images/albumGuru/bendahara.png';
import sekretaris from './images/albumGuru/sekretaris.png';

const uniqueID = () => Math.random().toString(16).slice(2)

class ProfileSekolah {
    constructor(id, srcProfil, desc) {
        this.id = id
        this.srcProfil = srcProfil
        this.desc = desc
    }
}

const profile = [
    new ProfileSekolah(uniqueID(), profil1, 'Foto tampak samping sekolah'),
    new ProfileSekolah(uniqueID(), profil2, 'Foto tampak depan sekolah'),
    new ProfileSekolah(uniqueID(), profil3, 'Foto tampak belakang sekolah')
]

const dataPengajar = [
    {
        srcImg: bendahara,
        nama: 'Fera Maharani',
        jabatan: 'Bendahara',
        riwayat: [
            {
                tahun: 2012,
                gelar: 'menjadi guru terbaik',
                deskripsi: 'Aut ut suscipit similique voluptate quibusdam.'
            },
            {
                tahun: 2015,
                gelar: 'nominasi guru favorit',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            },
            {
                tahun: 2016,
                gelar: 'nominasi guru berprestasi',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            },
            {
                tahun: 2018,
                gelar: 'nominasi guru nasional',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            }
        ]
    },
    {
        srcImg: kepalaSekolah,
        nama: 'Esty Susantina',
        jabatan: 'Kepala Sekolah',
        riwayat: [
            {
                tahun: 2012,
                gelar: 'menjadi guru terbaik',
                deskripsi: 'Aut ut suscipit similique voluptate quibusdam.'
            },
            {
                tahun: 2015,
                gelar: 'nominasi guru favorit',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            },
            {
                tahun: 2016,
                gelar: 'nominasi guru berprestasi',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            },
            {
                tahun: 2018,
                gelar: 'nominasi guru nasional',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            }
        ]
    },
    {
        srcImg: sekretaris,
        nama: 'Dwice Heni Ananda',
        jabatan: 'Sekretaris',
        riwayat: [
            {
                tahun: 2012,
                gelar: 'menjadi guru terbaik',
                deskripsi: 'Aut ut suscipit similique voluptate quibusdam.'
            },
            {
                tahun: 2015,
                gelar: 'nominasi guru favorit',
                deskripsi: 'Vero vel nesciunt praesentium voluptatibus et voluptatem est.'
            }
        ]
    }
]

export {profile, dataPengajar}