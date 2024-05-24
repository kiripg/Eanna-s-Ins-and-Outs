import React from "react";
import moreAboutStyled from "./moreAbout.styled";

export interface MoreCharacterprops{
    pic: any;
    title: string;
    link: string;
} 

const MoreCharacter = (props: MoreCharacterprops) =>{

    return(
        <moreAboutStyled.Container>
            <moreAboutStyled.Card>
            <moreAboutStyled.Left>
                <moreAboutStyled.Pic src={props.pic} width="30px"/>
            </moreAboutStyled.Left>
            <moreAboutStyled.Right>
               <moreAboutStyled.Text>More about...</moreAboutStyled.Text>  
               <moreAboutStyled.Title href={props.link}>{props.title} </moreAboutStyled.Title>
            </moreAboutStyled.Right>
            </moreAboutStyled.Card>
        </moreAboutStyled.Container>
    )

}

export default MoreCharacter;