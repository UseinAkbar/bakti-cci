import './Home.css';
import landingImage from "./images/landing.png";
import checklistImage from "./images/checklist.png";
import locationImage from "./images/location.png";
import moneyImage from "./images/money.png";
import bookImage from "./images/book.png";
import kepsekImage from "./images/kepsek.png";
import paperImage from "./images/paper.png";
import post1Image from "./images/post/1.png";
import post2Image from "./images/post/2.png";
import post3Image from "./images/post/3.png";
import post4Image from "./images/post/4.png";
import post5Image from "./images/post/5.png";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="bg-yellow-200 font-nunito">
      <Header/>
      <div className="flex justify-between px-14 mt-24">
        <div className="w-3/6 self-center mr-5">
          <p className="font-bold text-5xl w-5/6 font-raleway">Pendidikan Dasar Terbaik di Daerahnya</p>
          <p className="mt-3 font-light text-lg w-4/6 tracking-wider leading-relaxed">
            Mengembangkan potensi anak untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan, berakhlak mulia, ketrampilan yang berguna untuk masyarakat, bangsa dan negara.
          </p>
        </div>
        <div className="">
          <img src={landingImage} className="" alt="" />
        </div>
      </div>

      <div className="mt-36 px-30">
        <div className="flex justify-around">
            <p className="absolute left-0 text-9xl font-bold font-raleway leading-3 visi-misi-size visi-misi-stroke z-0 select-none">
              Visi
            </p>
            <p className="absolute right-2 text-9xl font-bold font-raleway leading-3 visi-misi-size visi-misi-stroke z-0 select-none">
              Misi
            </p>
          <div className="flex justify-center border-r-2 border-yellow-600 z-10">
            <div className="w-1/2">
              <p className="font-bold text-4xl mb-3 font-raleway">Visi</p>
              <p className="font-light text-lg tracking-wider leading-relaxed">
              Menjadikan anak usia dini memiliki ketrampilan, mandiri, cerdas, dan berakhlak mulia.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-3/6">
              <p className="font-bold text-4xl mb-3 font-raleway">Misi</p>
              <p className="font-light text-lg tracking-wider leading-relaxed">
              <ul className="list-decimal ml-4">
                <li>
                  Meningkatkan kualitas anak didik untuk memenuhi  kebutuhan pendidikan dasar.
                </li>
                <li>
                  Menciptakan sejak dini sumber daya manusia yang Cerdas, terampil, dan berakhlak mulia.
                </li>
              </ul>
              </p>  
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 px-30">
        <div className="text-center font-bold font-raleway text-4xl">
          Kenapa Harus TK PGRI 05?
        </div>
        <div className="flex justify-center">
          <p className="text-center font-light text-lg tracking-wider w-1/2 mt-3 font-nunito">
            Expedita voluptatibus assumenda iusto eum cumque beatae sunt saepe. Consectetur sed itaque consectetur. 
          </p>
        </div>

        <div className="px-28 grid grid-cols-4 grid-flow-col gap-5 content-center text-center mt-4">
          <div className="bg-green-200 bg-opacity-30 rounded-3xl pb-10">
            <div className="flex justify-center">
              <img src={checklistImage} className="" alt="" />
            </div>
            <div>
              <p className="font-bold font-raleway text-2xl mb-1">
                Fasilitas Lengkap
              </p>
              <div className="flex justify-center">
                <p className="w-4/6 text-xs font-nunito">
                  Dapat dijangkau melalui jalan dan jalur manapun.
                </p>
              </div>
            </div>
          </div> 

          <div className="bg-yellow-400 bg-opacity-30 rounded-3xl pb-10">
            <div className="flex justify-center">
              <img src={locationImage} className="" alt="" />
            </div>
            <p className="font-bold font-raleway text-2xl mb-1">
              Kemudahan Akses
            </p>
            <div className="flex justify-center">
                <p className="w-4/6 text-xs font-nunito">
                  Dapat dijangkau melalui jalan dan jalur manapun.
                </p>
              </div>
          </div>

          <div className="bg-green-200 bg-opacity-30 rounded-3xl pb-10">
            <div className="flex justify-center">
              <img src={moneyImage} className="" alt="" />
            </div>
            <p className="font-bold font-raleway text-2xl mb-1">
              Biaya Terjangkau
            </p>
            <div className="flex justify-center">
              <p className="w-4/6 text-xs font-nunito">
                Dapat dijangkau melalui jalan dan jalur manapun.
              </p>
            </div>
          </div>

          <div className="bg-yellow-400 bg-opacity-30 rounded-3xl pb-10">
            <div className="flex justify-center">
              <img src={bookImage} className="" alt="" />
            </div>
            <p className="font-bold font-raleway text-2xl mb-1">
              Kurikulum Unggul
            </p>
            <div className="flex justify-center">
              <p className="w-4/6 text-xs font-nunito">
                Dapat dijangkau melalui jalan dan jalur manapun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="flex justify-center">
          <div className="w-1/2 flex justify-center">
            <img src={kepsekImage} width="488" height="732" alt="" />
          </div>
          <div className="w-1/2">
            <div className="flex items-center justify-center min-h-full">
              <div className="mt-80 space-y-3">
                <p className="font-bold text-xl text-gray-600 font-raleway">Prakata</p>
                <p className="text-5xl font-bold font-raleway">Kepala Sekolah</p>
                <p className="font-nunito text-xl font-light mt-3 w-9/12">
                Berangkat dari keprihatinan melihat anak-anak usia 4-6 tahun berkumpul tanpa aktivitas pembelajaran, hingga membuat kelompok belajar TK PGRI 05
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20">
        <div className="flex justify-center">
          <div className="w-1/2">
            <div className="flex items-center justify-center min-h-full">
              <div className="mt-56 space-y-3">
                <p className="font-bold text-xl text-gray-600 font-raleway">Rangkaian</p>
                <p className="text-5xl font-bold font-raleway">Tujuan Sekolah</p>
                <p className="font-nunito text-xl font-light mt-3 w-9/12">
                Tujuan Pendidikan Lembaga adalah menjadikan anak usia dini mengembangkan potensinya untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan , berakhlak mulia, ketrampilan yang berguna untuk masyarakat, bangsa dan Negara. 
            
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={paperImage} width="488" height="732" alt="" />
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="flex justify-center">
          <div className="w-5/6 text-center">
            <h1 className="font-raleway text-5xl font-bold">Galeri Foto Aktivasi Siswa</h1>
            <div className="text-center flex justify-center">
              <p className="w-5/12 font-nunito mt-2 font-light">
                Expedita voluptatibus assumenda iusto eum cumque beatae sunt saepe. Consectetur sed itaque consectetur. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="flex justify-center ">
          <div className="w-5/6 text-center ">
            <h1 className="font-raleway text-5xl font-bold">Prestasi Sekolah</h1>
            <div className="text-center flex justify-center">
              <p className="w-5/12 font-nunito mt-2 font-light">
              Expedita voluptatibus assumenda iusto eum cumque beatae sunt.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1 place-items-center bg-yellow-700 bg-opacity-20 rounded p-6 mt-5">
              <div className="row-span-2" >
                <img src={post1Image} alt="" />
              </div>
              <div>
                <img src={post2Image} alt="" />
              </div>
              <div className="w-full h-full">
                <img src={post4Image} alt="" />
              </div>
              <div>
                <img src={post3Image} alt="" />
              </div>
              <div className="w-full h-full">
                <img src={post5Image} width="494" height="242" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="bg-yellow-500 py-2"></div>
        <div className="bg-green-300">
          <div className="px-12 py-12">
            <div className="w-1/2">
              <h1 className="font-poppins text-2xl font-bold">
              TK PGRI 05 TEGALAMPEL
              </h1>
              <p className="font-poppins mt-2 w-8/12">
              Desa Mandiro RT 17 RW 06 Kec. Tegalampel, Bondowoso, Jawa Timur 68291
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
