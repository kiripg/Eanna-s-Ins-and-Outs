import styled from '@emotion/styled';
import { FOOTER_HEIGHT } from '../components/footer/footer.styled';
import { HEADER_HEIGHT } from '../components/header/header';

export const CharactersStyled = {

    Page: styled.div`
    height: calc(100% - (${FOOTER_HEIGHT} + ${HEADER_HEIGHT} + 1.5rem));
    `,

    Container: styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content:center;
    padding: 2rem 4rem 4rem 4rem;
    min-height: 46.5vh;
    `,


}



export default CharactersStyled