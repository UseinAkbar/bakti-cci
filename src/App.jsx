import React from "react";
import './css/style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/aboutUs' element={<About />} />
                    <Route path='/hubungi-kami' element={<Contact />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App