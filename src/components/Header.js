const Header = () => {
    return(
        <header className="sticky top-0 z-10 flex justify-between px-10 py-5 bg-yellow-300 backdrop-filter backdrop-blur-lg bg-opacity-40  drop-shadow-2xl ">
        <p className="font-bold">TK PGRI 05 TEGALAMPEL</p>
        <div>
          <ul className="flex space-x-8">
            <li>Beranda</li>
            <li>Tentang Kami</li>
            <li>Kurikulum</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </header>
    )
}

export default Header;