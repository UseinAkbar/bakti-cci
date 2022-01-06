import React from "react";
import E3 from "../images/E3.png";

const Footer = () => {
    return(
      <div className="relative">
          <img src={E3} className="absolute right-0 bottom-0" alt="" />
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
    )
}

export default Footer;