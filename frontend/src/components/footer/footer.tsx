import React from "react";
import footerStyled from "./footer.styled";

const Footer = () =>{

    return(
        <footerStyled.Container> 
            <footerStyled.Left><footerStyled.Title>Eanna's ins and outs</footerStyled.Title></footerStyled.Left>
            <footerStyled.Rigth>
                <footerStyled.Text>Marta Terán</footerStyled.Text> 
            <footerStyled.Text>Kirissa Povedano</footerStyled.Text> 
            <footerStyled.Text>Ismael Benlarbi</footerStyled.Text>
            </footerStyled.Rigth>
    
                </footerStyled.Container>
       
    )


}

export default Footer;