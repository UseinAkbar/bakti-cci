// Album Kelas
// -> Bermain Balok
import balok1 from './images/albumKelas/bermainBalok/pic1.jpg'
import balok2 from './images/albumKelas/bermainBalok/pic2.jpg'
// -> Bermain Plastisin
import plastisin1 from './images/albumKelas/bermainPlastisin/pic1.jpg'
import plastisin2 from './images/albumKelas/bermainPlastisin/pic2.jpg'
// -> Gerakan Membaca 
import gerakBaca1 from './images/albumKelas/gerakanMembaca/pic1.jpg'
import gerakBaca2 from './images/albumKelas/gerakanMembaca/pic2.jpg'
import gerakBaca3 from './images/albumKelas/gerakanMembaca/pic3.jpg'
// -> Menyiplak Pola
import jiplakPola1 from './images/albumKelas/menyiplakPola/pic1.jpg'
import jiplakPola2 from './images/albumKelas/menyiplakPola/pic2.jpg'
import jiplakPola3 from './images/albumKelas/menyiplakPola/pic3.jpg'
import jiplakPola4 from './images/albumKelas/menyiplakPola/pic4.jpg'
import jiplakPola5 from './images/albumKelas/menyiplakPola/pic5.jpg'
// -> Pekerjaan Koki
import koki1 from './images/albumKelas/pekerjaanKoki/pic1.jpg'
import koki2 from './images/albumKelas/pekerjaanKoki/pic2.jpg'
// -> Pekerjaan Roti
import roti1 from './images/albumKelas/pekerjaanRoti/pic1.jpg'
import roti2 from './images/albumKelas/pekerjaanRoti/pic2.jpg'
// -> Pekerjaan Alat Berat
import alat1 from './images/albumKelas/pekerjaanAlatBerat/pic1.jpg'
import alat2 from './images/albumKelas/pekerjaanAlatBerat/pic2.jpg'
// -> Tanaman Aglonema
import aglonema1 from './images/albumKelas/tanamanAglonema/pic1.jpg'
import aglonema2 from './images/albumKelas/tanamanAglonema/pic2.jpg'
import aglonema3 from './images/albumKelas/tanamanAglonema/pic3.jpg'
// -> Tanaman Kangkung
import kangkung1 from './images/albumKelas/tanamanKangkung/pic1.jpg'
import kangkung2 from './images/albumKelas/tanamanKangkung/pic2.jpg'
import kangkung3 from './images/albumKelas/tanamanKangkung/pic3.jpg'
import kangkung4 from './images/albumKelas/tanamanKangkung/pic4.jpg'
// -> Tanaman Krokot
import krokot1 from './images/albumKelas/tanamanKrokot/pic1.jpg'
import krokot2 from './images/albumKelas/tanamanKrokot/pic2.jpg'
import krokot3 from './images/albumKelas/tanamanKrokot/pic3.jpg'
import krokot4 from './images/albumKelas/tanamanKrokot/pic4.jpg'


const uniqueID = () => Math.random().toString(16).slice(2)

class Kelas {
    constructor(thumbnail, srcGaleri = [], title, subTitle, tema = '', subTema = '', subSubTema = '') {
        this.id = uniqueID()
        this.thumbnail = thumbnail
        this.srcGaleri = srcGaleri
        this.title = title
        this.subtitle = subTitle
        this.tema = tema
        this.subTema = subTema
        this.subSubTema = subSubTema

    }
}

const galeriKelas = [
    new Kelas(balok1, [balok1, balok2], 'Kegiatan Kelas, Bermain Balok', 'Membuat bangunan rumah binatang darat', 'Binatang', 'Tempat tinggal binatang', 'Kandang ayam'),
    new Kelas(plastisin1, [plastisin1, plastisin2], 'Kegiatan Kelas, Bermain Plastisin', 'Kegiatan siswa membentuk plastisin dengan tema hewan', 'Binatang', 'Binatang Darat', 'Binatang peliharaan di rumah, ayam'),
    new Kelas(gerakBaca1, [gerakBaca1, gerakBaca2, gerakBaca3], 'Kegiatan Germas Buku (Gerakan Bersama Membaca Buku)', ' Kegiatan Ibu bercerita kepada siswa mengenai buku terkait dengan tema Germas Buku'),
    new Kelas(jiplakPola1, [jiplakPola1, jiplakPola2, jiplakPola3, jiplakPola4, jiplakPola5], 'Kegiatan Kelas, Menjiplak Pola', 'Kegiatan Menjiplak Pola Baju dengan tahap menjiplak, mewarnai, lalu menggunting', 'Kebutuhanku', 'Macam-macam pakaian', 'Pakaian bermain'),
    new Kelas(koki1, [koki1, koki2], 'Kegiatan Puncak Tema Pekerjaan', 'Siswa ikut serta dalam membuat ayam krispy', 'Pekerjaan', 'Koki', 'Membuat ayam krispy'),
    new Kelas(roti1, [roti1, roti2], 'Kegiatan Puncak Tema Pekerjaan', 'Siswa ikut serta menyimak penjelasan cara membuat roti', 'Tanaman', 'Koki', 'Membuat roti'),
    new Kelas(alat1, [alat1, alat2], 'Kegiatan Puncak Tema Pekerjaan', 'Siswa ikut serta menyimak penjelasan tentang alat bekerja dalam pertanian', 'Pekerjaan', 'Kendaraan untuk bekerja', 'Alat berat'),
    new Kelas(aglonema1, [aglonema1, aglonema2, aglonema3], 'Kegiatan Puncak Tema Tanaman', 'Siswa ikut serta menyimak penjelasan budidaya tanaman hias', 'Tanaman', 'Tanaman hias', 'Bunga Aglonema'),
    new Kelas(kangkung1, [kangkung1, kangkung2, kangkung3, kangkung4], 'Kegiatan Puncak Tema Tanaman', 'Siswa ikut serta dalam memanen tanaman kangkung', 'Tanaman', 'Tanaman sayur', 'Sayur kangkung'),
    new Kelas(krokot1, [krokot1, krokot2, krokot3, krokot4], 'Kegiatan Puncak Tema Tanaman', 'Siswa ikut serta dalam menanam bunga krokot', 'Tanaman', 'Tanaman hias', 'Bunga krokot')
]

export default galeriKelas