import styled from "@emotion/styled";
import mapPic from '../../assets/map.png'

export const heroStyled ={

    Container: styled.div`
        background: url(${mapPic});
        height: 30rem;
        background-size: cover;
        background-position: 60% 10%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        &::before {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.6);
            content: "";
          }
        
    `,
    Title: styled.h2`
    backdrop-filter: blur(3px);
    align-text: center;
    font-family: 'Beth Ellen', Roboto;
    font-size: 3.5rem;
    color: #9395D3;
    `,

}

export default heroStyled;