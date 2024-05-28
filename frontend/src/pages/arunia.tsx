import React from "react";
import arunia from '../assets/map.png'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Arunia = () =>{

    return(
        <><Header />
        <div>

            <img src={arunia} width={"900rem"} alt="its a map"/>
        </div>
        <Footer /></>
    )

}


export default Arunia;