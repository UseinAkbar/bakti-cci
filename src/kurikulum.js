import tatapMuka from './images/albumKurikulum/tatapMuka/pic1.png'
import daring from './images/albumKurikulum/daring/pic1.png'
import luring from './images/albumKurikulum/luring/pic1.png'


class Kurikulum {
    constructor(img, title) {
        this.img = img
        this.title = title
        this.pembuka = 'Kegiatan pembukaan dilakukan untuk menyiapkan peserta didik secara fisik dan psikis untuk mengikuti proses pembelajaran. Kegiatan ini berhubungan dengan pembahasan sub tema yang akan dilaksanakan. Beberapa kegiatan yang dapat dilakukan antara lain: berbaris, mengucap salam, berdoa dan menghafal Asmaul Husna, bercerita atau berbagi pengalaman yang memberikan motivasi.'
        this.inti = 'Kegiatan inti memberikan ruang yang cukup bagi peserta didik untuk berinisiatif, kreatif, kritis, dan mandiri sesuai dengan bakat, minat, dan kebutuhan anak. Kegiatan inti dilaksanakan dengan pendekatan saintifik melalui mengamati, menanya,  mengumpulkan informasi, menalar, dan mengomunikasikan yang dintegrasikan dengan nilai-nilai Penguatan Pendidikan Karakter (PPK), Literasi, dan 4 C dan dibungkus dengan nilai agama dan moral. Kegiatan inti ini berprinsip pada aspek perkembangan anak dan memperhatikan prinsip pengembangan karakter Islami.'
        this.penutup = 'Kegiatan penutup merupakan kegiatan yang bersifat penenangan. Beberapa hal yang dapat dilakukan dalam kegiatan penutup di antaranya:'
        this.listPenutup = [
            'Membuat kesimpulan sederhana dari kegiatan yang telah dilakukan, termasuk di dalamnya pesan moral yang ingin disampaikan dan dikaitkan dengan ajaran Islam serta pendapat anak terkait substansi sesuai tata nilai kegiatan yang telah dilewati.', 
            'Membuat kegiatan penenangan seperti bernyanyi, bersyair, dan bercerita yang sifatnya menggembirakan dan bernuansa Islami', 'Menginformasikan rencana pembelajaran untuk pertemuan berikutnya; dan memberikan pesan moral serta informasi pandemic covid 19.',
            'Berdoa sebagai rasa bersyukur kepada Allah SWT.'
        ]
        
    }
}

const thumbnailKurikulum = [tatapMuka, daring, luring]

const detailKurikulum = [
    new Kurikulum(tatapMuka, 'Pembelajaran Tatap Muka'),
    new Kurikulum(daring, 'Pembelajaran Daring'),
    new Kurikulum(luring, 'Pembelajaran Luring')
]

export {thumbnailKurikulum, detailKurikulum}