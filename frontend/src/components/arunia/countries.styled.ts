import styled from '@emotion/styled';

const CountriesStyled = {

    Container: styled.div`
       diplay:flex;
       justify-content: center;
       align-items:center;
    padding: 1rem 15rem 3rem 15rem;
    `,

    Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    `,
    Left: styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `,
    Rigth: styled.div`
    display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    `,

}


export default CountriesStyled;