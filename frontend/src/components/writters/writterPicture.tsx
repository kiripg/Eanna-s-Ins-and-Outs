import React from "react";
import pic from './../../assets/writter.png'
import WritterPictureStyled from "./writterPicture.styled";


const WritterPictures = () =>{

    return(
        <WritterPictureStyled.Container>
            
            <WritterPictureStyled.Image src={pic} alt="pic" />
        </WritterPictureStyled.Container>
    )

}

export default WritterPictures;