import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import FirstBookStyled from "./firstbook.styled";

export interface firstBookProps{
    name?: string,
    pic?: any,
    key: number
}

const FirstBook = (props: firstBookProps) =>{

const [isFlipped, setIsFlipped] = useState(false);

const flipCard = () =>{
    setIsFlipped(!isFlipped);
}

return(
    
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.AidaFront onClick={flipCard} ><FirstBookStyled.Img src={props.pic} alt={props.name}/></FirstBookStyled.AidaFront>
    <FirstBookStyled.AidaBack onClick={flipCard}>
            <FirstBookStyled.Img src={props.pic} alt={props.name} />
            <FirstBookStyled.Text>{props.name}</FirstBookStyled.Text>
        </FirstBookStyled.AidaBack>
</ReactCardFlip>
</FirstBookStyled.Card>

)


}

export default FirstBook;