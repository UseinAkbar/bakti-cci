import galeri1 from './images/galeri_1.png'
import galeri2 from './images/galeri_2.png'
import galeri3 from './images/galeri_3.png'
import galeri4 from './images/galeri_4.png'
import dummmy1 from './images/galeri_2.png'
import dummmy2 from './images/galeri_3.png'
import dummmy3 from './images/galeri_4.png'
import dummmy4 from './images/galeri_1.png'

import profil1 from './images/profil_1.png'
import profil2 from './images/profil_2.png'
import profil3 from './images/profil_3.png'
import profilDetail1 from './images/profilDetail_1.png'
import profilDetail2 from './images/profilDetail_2.png'
import profilDetail3 from './images/profilDetail_3.png'

import kepalaSekolah from './images/kplSekolah.png';
import bendahara from './images/bendahara.png';
import sekretaris from './images/sekretaris.png';

const uniqueID = () => Math.random().toString(16).slice(2)

class DataGaleri {
    constructor(id, srcGaleri) {
        this.id = id
        this.srcGaleri = srcGaleri
        this.title = 'Kegiatan Belajar Mengajar'
        this.subTitle = 'Kegiatan Belajar Mengajar yang intensif, dengan mengunakan tenaga pengajar yang baik.'
    }
}

class ProfileSekolah {
    constructor(id, srcProfil, srcProfilDetail, desc) {
        this.id = id
        this.srcProfil = srcProfil
        this.srcProfilDetail = srcProfilDetail
        this.desc = desc
    }
}

const galeri = [
    new DataGaleri(uniqueID(), galeri1),
    new DataGaleri(uniqueID(), galeri2),
    new DataGaleri(uniqueID(), galeri3),
    new DataGaleri(uniqueID(), galeri4),
    new DataGaleri(uniqueID(), dummmy1),
    new DataGaleri(uniqueID(), dummmy2),
    new DataGaleri(uniqueID(), dummmy3),
    new DataGaleri(uniqueID(), dummmy4)
]

const profile = [
    new ProfileSekolah(uniqueID(), profil1, profilDetail1, 'Foto tampak samping sekolah'),
    new ProfileSekolah(uniqueID(), profil2, profilDetail2, 'Foto tampak depan sekolah'),
    new ProfileSekolah(uniqueID(), profil3, profilDetail3, 'Foto tampak belakang sekolah')
]

const dataPengajar = [
    {
        srcImg: bendahara,
        nama: 'Fera Maharani',
        jabatan: 'Bendahara'
    },
    {
        srcImg: kepalaSekolah,
        nama: 'Esty Susantina',
        jabatan: 'Kepala Sekolah'
    },
    {
        srcImg: sekretaris,
        nama: 'Dwice Heni Ananda',
        jabatan: 'Sekretaris'
    }
]

export {galeri, profile, dataPengajar}