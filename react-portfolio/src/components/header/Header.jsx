import React from 'react'
import './header.css'
import CTA from "./CTA";
import ME from "../../assets/me-5.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Daniel Schroter</h1>
                <h5 className="text-light">Data Scientist & AI Engineer</h5>
                <CTA></CTA>
                <div className="header__image-row">
                    <div>
                        <HeaderSocials/>
                    </div>
                    <div className="me">
                        <img className="me-img" src={ME} alt="me"/>
                    </div>
                    <div className="scroll__down-div">
                        <a href="#contact" className='scroll__down'>Scroll Down</a>
                    </div>
                </div>

            </div>


        </header>
    )
}

export default Header