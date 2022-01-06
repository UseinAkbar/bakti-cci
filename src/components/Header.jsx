import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header className="sticky top-0 z-10 flex justify-between px-10 py-5 bg-yellow-300 backdrop-filter backdrop-blur-lg bg-opacity-40  drop-shadow-2xl ">
          <a href="/" className="font-bold font-poppins">TK PGRI 05 TEGALAMPEL</a>
          <div>
            <ul className="flex space-x-8">
              <NavLink to='/' activeClassName="active" className="font-nunito" exact>Beranda</NavLink>
              <NavLink to='/tentang-kami' activeClassName="active" className="font-nunito" exact>Tentang Kami</NavLink>
              <NavLink to='/kurikulum' activeClassName="active" className="font-nunito" exact>Kurikulum</NavLink>
              <NavLink to='/hubungi-kami' activeClassName="active" className="font-nunito" exact>Hubungi Kami</NavLink>
            </ul>
          </div>
        </header>
    )
}

export default Header;