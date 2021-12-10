import './App.css';
import landingImage from "./images/landing.png";
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
        test
      </div>
    </div>
  );
}

export default App;
