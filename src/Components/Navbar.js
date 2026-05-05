import React from 'react';
import { useState, useEffect } from "react";

const Navbar = () => {

    // 1. Initialize state based on current window width
    const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 539);

    // 2. Optimized resize listener
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 539) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toogleNav = () => {
        window.scrollTo(0,0);
        isNavOpen && window.innerWidth < 538 ? setIsNavOpen(false) : setIsNavOpen(true);
    }
    var navs = document.getElementsByTagName('a');

    for (let i = 0; i < navs.length; i++) navs[i].addEventListener('click', () => window.scrollTo(0,0));
    

    const NavItem = (props) => {
        return (
            <a className="nav-item text-center" href={props.link}><span>{props.name}</span> </a>
        );
    }

    return (
        <>
            <header className="bg-light row align-center text-dark">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xs-9 col-lg-6  d-none-md">
                        <h1 className="logo text-danger">e<span className="small text-dark">Hardware</span></h1> 
                    </div>
                    <div className="col-xs-2 d-none-md d-none-lg">
                        <button className="btn-outline"><i className="fa-solid fa-shopping-cart" ></i></button>
                    </div>
                    <div className="col-xs-1  d-none-md d-none-lg">
                        <p className="btn-menu text-primary" onClick={toogleNav}>   
                            {!isNavOpen && <span><i className="fa-solid fa-bars" ></i></span>}
                            {isNavOpen && <i className="fa-solid fa-close" ></i>}
                        </p>
                    </div>
                    <div className="col-xs-12 s col-md-12 col-lg-6">
                        {isNavOpen && <nav>
                            <ol className="nav-bars">
                                <NavItem link="/" name="Home"/>
                                <NavItem link="/about" name="Products"/>
                                <NavItem link="/about" name="About"/>
                                <NavItem link="/contact" name="Contact"/>
                                <li className="nav-item text-primary"> <i className="fa-solid fa-search"></i><span> Search</span> </li>
                                <li className="nav-item text-success"> <button className="btn btn-outline"><i className="fa-solid fa-shopping-cart"></i><span>Cart</span></button> </li>
                            </ol>
                        </nav>}
                    </div>
                </div>
            </div>
            </header><br />
        </>
    );
}

export default Navbar;
