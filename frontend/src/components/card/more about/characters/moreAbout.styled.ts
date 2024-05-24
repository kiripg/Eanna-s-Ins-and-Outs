import styled from "@emotion/styled";

export const moreAboutStyled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  `,

  Card: styled.div`
    background-color: #937b63;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60rem;
    height: 20rem;
    align-items: center;
  `,
  Left: styled.div`
    flex: 1;
    display: flex;
  `,
  Right: styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 6rem 0 2.5rem;
    justify-content: center;
  `,
  Pic: styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 30px 0 0 30px;
  `,
  Text: styled.p`
    font-size: 2.5rem;
    font-family: "Berkshire Swash", Roboto;
    letter-spacing: 0.2rem;
    color: white;
  `,
  Title: styled.a`
    font-size: 3rem;
    font-family: "Berkshire Swash", Roboto;
    letter-spacing: 0.2rem;
    color: white;
    text-decoration: underline currentcolor;
    text-align: right;

    &:visited {
      color: white;
    }
  `,
};

export default moreAboutStyled;
