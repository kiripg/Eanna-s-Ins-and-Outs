import styled from "@emotion/styled";

export const FOOTER_HEIGHT = '12rem';

export const footerStyled = {
  Container: styled.div`
    background-color: #937b63;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    height: ${FOOTER_HEIGHT};
  `,
  Left: styled.div`
    padding-left: 6rem;
    display: flex;
    align-items: center;
  `,
  Rigth: styled.div`
    padding: 0 8rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `,
  Title: styled.h2`
    color: #9395d3;
    font-family: "Beth Ellen", Roboto;
    font-size: 2.3rem;
  `,
  Text: styled.p`
    font-size: 1.3rem;
    font-family: "Berkshire Swash", Roboto;
    font-weight: 200;
  `,
};

export default footerStyled;
