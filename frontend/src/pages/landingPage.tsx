import React from "react";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Rating from "../components/card/rating/rating";
import Footer from "../components/footer/footer";
import MoreCharacter from "../components/card/more about/characters/moreCharacters";
import char from './../assets/npc.png'
import writpic from './../assets/writter.png'


const LandingPage = () =>{

    return(
        <>
        <Header />
        <Hero />
        <Rating />
        <MoreCharacter pic={char} title="Characters" link="/character" />
        <MoreCharacter pic={writpic} title="Writters" link="/writter" />
        <Footer />
        </>
        
    )


}

export default LandingPage;