import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/aboutUs' element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App