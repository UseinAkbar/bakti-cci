import './App.css';
import landingImage from "./images/landing.png";
import checklistImage from "./images/checklist.png";
import locationImage from "./images/location.png";
import moneyImage from "./images/money.png";
import bookImage from "./images/book.png";
import Header from "./components/Header";

function App() {
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
          <p className="text-center font-light text-lg tracking-wider w-1/2 mt-3">
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
                <p className="w-4/6 text-xs">
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
                <p className="w-4/6 text-xs">
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
              <p className="w-4/6 text-xs">
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
              <p className="w-4/6 text-xs">
                Dapat dijangkau melalui jalan dan jalur manapun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
