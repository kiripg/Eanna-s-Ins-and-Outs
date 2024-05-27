import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import FirstBookStyled from "./firstbook.styled";


const FirstBook = () =>{

const [isFlipped, setIsFlipped] = useState(false);

const flipCard = () =>{
    setIsFlipped(!isFlipped);
}

return(
    <FirstBookStyled.Container>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.AidaFront onClick={flipCard} ></FirstBookStyled.AidaFront>
    <FirstBookStyled.AidaBack onClick={flipCard}>
        <FirstBookStyled.Text>Aida Ethelind</FirstBookStyled.Text>
        </FirstBookStyled.AidaBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.ZanderFront onClick={flipCard} ></FirstBookStyled.ZanderFront>
    <FirstBookStyled.ZanderBack onClick={flipCard}>
        <FirstBookStyled.Text>Alexander 'Zander' Theodil</FirstBookStyled.Text>
        </FirstBookStyled.ZanderBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.DiegoFront onClick={flipCard} />
    <FirstBookStyled.DiegoBack onClick={flipCard}>
        <FirstBookStyled.Text>Diego</FirstBookStyled.Text>
        </FirstBookStyled.DiegoBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.JaceFront onClick={flipCard} />
    <FirstBookStyled.JaceBack onClick={flipCard}>
        <FirstBookStyled.Text>Jace</FirstBookStyled.Text>
        </FirstBookStyled.JaceBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.RoyFront onClick={flipCard} />
    <FirstBookStyled.RoyBack onClick={flipCard}>
        <FirstBookStyled.Text>Leroy 'Roy' Mustang</FirstBookStyled.Text>
        </FirstBookStyled.RoyBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.LissFront onClick={flipCard} />
    <FirstBookStyled.LissBack onClick={flipCard}>
        <FirstBookStyled.Text>Lissandra Vondai</FirstBookStyled.Text>
        </FirstBookStyled.LissBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.TillieFront onClick={flipCard} />
    <FirstBookStyled.TillieBack onClick={flipCard}>
        <FirstBookStyled.Text>Mathilde 'Tillie' Deagret</FirstBookStyled.Text>
        </FirstBookStyled.TillieBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.SkyFront onClick={flipCard} />
    <FirstBookStyled.SkyBack onClick={flipCard}>
        <FirstBookStyled.Text>Skylar Hemill</FirstBookStyled.Text>
        </FirstBookStyled.SkyBack>
</ReactCardFlip>
</FirstBookStyled.Card>
<FirstBookStyled.Card>
<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
    <FirstBookStyled.SolairFront onClick={flipCard} />
    <FirstBookStyled.SolairBack onClick={flipCard}>
        <FirstBookStyled.Text>Solair</FirstBookStyled.Text>
        </FirstBookStyled.SolairBack>
</ReactCardFlip>
</FirstBookStyled.Card>

</FirstBookStyled.Container>
)


}

export default FirstBook;