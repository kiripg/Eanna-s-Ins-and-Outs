import styled from '@emotion/styled';
import aida from '../../../assets/characters/aida.jpg'
import zander from '../../../assets/characters/zander.jpg'
import diego from '../../../assets/characters/diego.jpg'
import jace from '../../../assets/characters/jace.jpg';
import roy from '../../../assets/characters/roy.jpg'
import liss from '../../../assets/characters/lissandra.jpg';
import tillie from '../../../assets/characters/tillie.jpg'
import sky from '../../../assets/characters/sky.jpg'
import solair from '../../../assets/characters/solair.jpg'

export const FirstBookStyled= {

    Container: styled.div`
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3rem;
        align-items: center;
        justify-content:center;
        padding: 4rem;

    `,
    Card: styled.div`
    height: 20rem;
    width: 15rem;
    `, 
    Text: styled.p`
    flex-grow: 1;
    text-align: center;
    backdrop-filter: blur(30px);
    font-size: 2.1rem;
    `,
    AidaFront: styled.div`
        background: url(${aida});
        background-size: cover;
        background-position: center;
        height: 20rem;
        width: 15rem;
        border-radius: 50px;
        cursor: pointer;
        
    `,
    AidaBack: styled.div`
        background: url(${aida});
        background-size: cover;
        background-position: center;
        filter: sepia(1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20rem;
        width: 15rem;
        border-radius: 50px;
        cursor: pointer;
    `,
    ZanderFront: styled.div`
    background: url(${zander});
    background-size: cover;
    background-position: center;
    height: 20rem;
    width: 15rem;
    border-radius: 50px;
    cursor: pointer;
`,
ZanderBack: styled.div`
background: url(${zander});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
DiegoFront: styled.div`
background: url(${diego});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
DiegoBack: styled.div`
background: url(${diego});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
JaceFront: styled.div`
background: url(${jace});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
JaceBack: styled.div`
background: url(${jace});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
RoyFront: styled.div`
background: url(${roy});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
RoyBack: styled.div`
background: url(${roy});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
LissFront: styled.div`
background: url(${liss});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
LissBack: styled.div`
background: url(${liss});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
TillieFront: styled.div`
background: url(${tillie});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
TillieBack: styled.div`
background: url(${tillie});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
SkyFront: styled.div`
background: url(${sky});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
SkyBack: styled.div`
background: url(${sky});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
SolairFront: styled.div`
background: url(${solair});
background-size: cover;
background-position: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
SolairBack: styled.div`
background: url(${solair});
background-size: cover;
background-position: center;
filter: sepia(1);
display: flex;
align-items: center;
justify-content: center;
height: 20rem;
width: 15rem;
border-radius: 50px;
cursor: pointer;
`,
}


export default FirstBookStyled;