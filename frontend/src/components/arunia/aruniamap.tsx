import React from "react";
import AruniaMapStyled from "./aruniamap.styled";


const AruniaMap= () =>{



    return(
       <AruniaMapStyled.Container>
        <AruniaMapStyled.Picture>

        </AruniaMapStyled.Picture>
        <AruniaMapStyled.List>
            <AruniaMapStyled.DivText>
           <AruniaMapStyled.Link href="#Countries">Countries</AruniaMapStyled.Link>
           <AruniaMapStyled.Link href="#Religion">Religion</AruniaMapStyled.Link>
           <AruniaMapStyled.Link href="#Races">Races</AruniaMapStyled.Link>
           </AruniaMapStyled.DivText>
        </AruniaMapStyled.List>

       </AruniaMapStyled.Container>
    )
}


export default AruniaMap;