import styled from "@emotion/styled";


export const ratingStyled = {

    Container: styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    `,
    Text: styled.h2`
        color: white;
        font-size: 2.5rem;
        font-family: 'Berkshire Swash', Roboto;
        letter-spacing: 0.2rem
    `,

}

export default ratingStyled;