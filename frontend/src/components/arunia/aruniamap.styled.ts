import styled from "@emotion/styled";
import arunia from "../../assets/arunia.png";
import papiro from "../../assets/papiro.png"

export const AruniaMapStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  `,
  Picture: styled.div`
    flex-grow: 2;
    background: url(${arunia});
    background-size: contain;
    background-repeat: no-repeat;
    height: 50rem;
    background-position: center;
  `,
  List: styled.div`
    flex-grow: 1;
    color: white;
    background: url(${papiro});
    filter: sepia(40%);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Link: styled.a`
    color: black;
    font-size: 2rem;
    text-decoration: underline;
    &:visited{
      color:black;
    }
  `,

  DivText: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  `,
 
};

export default AruniaMapStyled;
