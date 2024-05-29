import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AruniaMap from "../components/arunia/aruniamap";
import Countries from "../components/arunia/countries";
import Religion from "../components/arunia/religion";
import Races from "../components/arunia/races";

const Arunia = () =>{

    return(
        <><Header />
        <div>

            <AruniaMap />
        </div>
        <div>
        <Countries />
        </div>
        <div>
        <Religion />
        </div>
        <div>
            <Races/>
        </div>
        <Footer /></>
    )

}


export default Arunia;