// Album Kegiatan
// -> Hari Anak
import HAN1 from './images/albumKegiatan/hariAnak/pic1.jpg'
import HAN2 from './images/albumKegiatan/hariAnak/pic2.jpg'
// -> Hari Anak Tari
import tari from './images/albumKegiatan/hariAnakTari/pic1.jpg'
// -> Lomba Tingkat Kecamatan
import lomba from './images/albumKegiatan/lombaTingkatKecamatan/pic1.jpg'
// -> Tahun Baru Islam
import muharram1 from './images/albumKegiatan/tahunBaruIslam/pic1.jpg'
import muharram2 from './images/albumKegiatan/tahunBaruIslam/pic2.jpg'
// -> Tahun Baru Islam Drumband
import drumband1 from './images/albumKegiatan/drumband/pic1.jpg'
import drumband2 from './images/albumKegiatan/drumband/pic2.jpg'
import drumband3 from './images/albumKegiatan/drumband/pic3.jpg'


const uniqueID = () => Math.random().toString(16).slice(2)

class Kegiatan {
    constructor(thumbnail, srcGaleri = [], title, subTitle) {
        this.id = uniqueID()
        this.thumbnail = thumbnail
        this.srcGaleri = srcGaleri
        this.title = title
        this.subtitle = subTitle
    }
}

const galeriKegiatan = [
    new Kegiatan(HAN1, [HAN1, HAN2], 'Kegiatan HAN (Hari Anak nasional)', 'Keikutsertaan siswa-siswi TK se-kecamatan tegalampel dalam rangka senam massal sehat ceria IGTKI Kabupaten Bondowoso'),
    new Kegiatan(tari, [tari], 'Kegiatan HAN (Hari Anak nasional)', 'Keikutsertaan siswa-siswi dalam rangka seni tari "Molong Kopi", yang merupakan seni tari khas daerah Bondowoso'),
    new Kegiatan(lomba, [lomba], 'Foto Kegiatan Lomba Mewarnai Tingkat Kecamatan', 'Siswa ikut serta dalam kegiatan lomba mewarnai, dalam rangka memperingati HUT PGRI ke 74'),
    new Kegiatan(muharram1, [muharram1, muharram2], 'Foto Kegiatan Memperingati 1 Muharram (Tingkat Kecamatan)', 'Siswa ikut serta dalam memperingati 1 muharram (Tahun Baru Islam)'),
    new Kegiatan(drumband1, [drumband1, drumband2, drumband3], 'Kegiatan Memperingati 1 Muharram / Tahun Baru Islam (Tingkat Gugus Kecamatan)', 'Siswa ikut serta dalam memperingati 1 muharram (Tahun Baru Islam)')
]

export default galeriKegiatan