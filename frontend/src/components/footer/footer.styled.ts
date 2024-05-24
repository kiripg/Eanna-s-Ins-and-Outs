import styled from "@emotion/styled";

export const footerStyled = {
  Container: styled.div`
    background-color: #937b63;
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
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
    gap: 1rem;
  `,
  Title: styled.h2`
    color: #9395d3;
    font-family: "Beth Ellen", Roboto;
    font-size: 2.3rem;
  `,
  Text: styled.p`
    color: white;
    font-size: 1.4rem;
    font-family: "Berkshire Swash", Roboto;
    font-weight: 200;
  `,
};

export default footerStyled;
