import styled from "@emotion/styled";

export const FirstBookStyled = {
  Card: styled.div`
    height: 18rem;
    width: 16rem;
  `,
  Text: styled.p`
    text-align: center;
    font-size: 2.1rem;
    position: absolute;
    backdrop-filter: blur(30px);
    width: 16rem;
  `,
  AidaFront: styled.div`
    background-size: cover;
    background-position: center;
    height: 18rem;
    width: 16rem;
    border-radius: 50px;
    cursor: pointer;
  `,
  AidaBack: styled.div`
    background-size: cover;
    background-position: center;
    filter: sepia(1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18rem;
    width: 16rem;
    border-radius: 50px;
    cursor: pointer;
  `,
  Img: styled.img`
    height: 18rem;
    width: 16rem;
    border-radius: 50px;
  `,
};

export default FirstBookStyled;
