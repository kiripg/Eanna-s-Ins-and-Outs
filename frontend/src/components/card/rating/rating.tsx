import React from "react";
import CssStars from "./CSSstars";
import ratingStyled from "./rating.styled";

const Rating = () =>{
    return(
        <>
        <ratingStyled.Container>
        <CssStars value={5} max={5} readOnly sx={{fontSize: '6rem', gap: '0.5rem'}}/>
            <ratingStyled.Text>5 stars in Goodreads!</ratingStyled.Text>
            </ratingStyled.Container>
            </>
    )
}


export default Rating