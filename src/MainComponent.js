import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Construction from './Pages/Products/Construction';
import Plumbering from './Pages/Products/Plumbering';
import Floors from './Pages/Products/Floors';
import ToolsEquipments from './Pages/Products/ToolsEquipments';
import SearchPage from './Pages/SearchPage';
import Contact from './Pages/Contact';

const MainComponent = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                    <main>
                        <Routes>
                                <Route path='/' Component={Home} />
                                <Route path='/all-products' Component={Products} />
                                <Route path='/all-products/construction' Component={Construction} />
                                <Route path='/all-products/plumbering' Component={Plumbering}/>
                                <Route path='/all-products/floors' Component={Floors}/>
                                <Route path='/all-products/paint' Component={Floors}/>
                                <Route path='/all-products/tools' Component={ToolsEquipments}/>
                                <Route path='/search' Component={SearchPage}/>
                                <Route path='/contact' Component={Contact} />
                        </Routes>
                    </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default MainComponent;
