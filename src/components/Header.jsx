import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className="sticky top-0 z-10 flex justify-between px-10 py-5 bg-yellow-300 backdrop-filter backdrop-blur-lg bg-opacity-40  drop-shadow-2xl ">
          <p className="font-bold">TK PGRI 05 TEGALAMPEL</p>
          <div>
            <ul className="flex space-x-8">
              <a href='/'>Beranda</a>
              <a href='/#beranda'>Beranda 2</a>
              <a href='/aboutUs'>Tentang Kami</a>
              <a href="#">Kurikulum</a>
              <a href="#">Hubungi Kami</a>
            </ul>
          </div>
        </header>
    )
}

export default Header;