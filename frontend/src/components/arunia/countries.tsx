import React from "react";
import CountriesStyled from "./countries.styled";


const Countries = () =>{


    return(
        <>
        <CountriesStyled.Container>
        <div>
        <h1 id="Countries" style={{color: '#9395d3', fontSize: '3rem'}}>Countries</h1>
        </div>
        <CountriesStyled.Content>
            <p style={{fontStyle: 'italic'}}>[This may contain spoilers, read by your own risk...]</p>
            <CountriesStyled.Rigth>
                <h2 style={{color: '#CDE5D7'}}>Adeshia</h2>
                <p style={{textAlign: 'right'}}>Coming soon...</p>
            </CountriesStyled.Rigth>
            <CountriesStyled.Left>
                <h2 style={{color: '#CDE5D7'}}>Deren</h2>
                <p>Coming soon...</p>
            </CountriesStyled.Left>
            <CountriesStyled.Rigth>
                <h2 style={{color: '#CDE5D7'}}>Doregon</h2>
                <p style={{textAlign: 'right'}}>Coming soon...</p>
            </CountriesStyled.Rigth>
            <CountriesStyled.Left>
                <h2 style={{color: '#CDE5D7'}}>Ghala</h2>
                <p> Coming soon... </p>
            </CountriesStyled.Left>
            <CountriesStyled.Rigth>
                <h2 style={{color: '#CDE5D7'}}>Idlis</h2>
                <p style={{textAlign: 'right'}}>
Ildis is the homeland of the moon elves, characterized by its ground covered with a fine layer of natural crystal due to magical use. It is a large and beautiful place with many elegant and well-decorated shops, and it houses the Academy of Arcane Arts and the Great Library of Ildis.
<br></br>
The main population consists of moon elves, though other races, such as dwarves and Lith slaves, have recently moved in. The Lith live in areas considered undesirable by the moon elves.
<br></br>
Ildis has a magical atmosphere with a purple sky and a static second moon. It experiences all seasons, but spring is the longest and strongest, with generally mild and occasionally rainy weather. The country is a monarchy with strict policies.</p>
            </CountriesStyled.Rigth>
            <CountriesStyled.Left>
                <h2 style={{color: '#CDE5D7'}}>Jera</h2>
                <p>
                Jera has always been a mystery. It is a dense jungle where anyone who enters never returns. Occasionally, some... growls? can be heard at its edges. However, no one is brave enough to risk their life to investigate them.
                </p>
            </CountriesStyled.Left>
            <CountriesStyled.Rigth>
                <h2 style={{color: '#CDE5D7'}}>Oftala</h2>
                <p style={{textAlign: 'right'}}>
                    
The current Empire of Oftala is a fusion of the kingdoms of Namer and Junia, which signed a peace treaty through the marriage of their heirs after 26 years of conflict in the War of the Moles.
<br></br>
After the war and the formation of the empire, the country prospered through expansionism, becoming one of the most prominent nations with a high standard of living.
<br></br>
It is a hierarchical society led by the Emperor, followed by his close nobles, and heavily influenced by the Church of Eanna. Most buildings are adorned in white and gold, making them appear more ostentatious. Despite the hierarchy, there are no slaves, but commoners work excessively to survive. There are no famines, and healthcare is free, resulting in a slightly higher life expectancy than in Valond.
<br></br>
However, the empire has issues, such as significant corruption among the nobility and a large black market for medical goods that grows alongside medical advancements. There is also considerable sexism; the Salic law prevents women from ruling, which is becoming problematic as Emperor Inocentis II has only daughters with both the Empress and his concubines.
                </p>
            </CountriesStyled.Rigth>
            <CountriesStyled.Left>
                <h2 style={{color: '#CDE5D7'}}>Ordaga</h2>
                <p>Coming soon...</p>
            </CountriesStyled.Left>
            <CountriesStyled.Rigth>
                <h2 style={{color: '#CDE5D7'}}>Valond</h2>
                <p>Coming soon...</p>
            </CountriesStyled.Rigth>
            <CountriesStyled.Left>
                <h2 style={{color: '#CDE5D7'}}>Taran's Island</h2>
                <p>Coming soon...</p>
            </CountriesStyled.Left>
        </CountriesStyled.Content>
</CountriesStyled.Container>
</>
        
    )

}


export default Countries;