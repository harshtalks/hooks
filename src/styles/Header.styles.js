import styled from "styled-components";

export const HeaderContent = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;

  button {
    outline: none;
    border: none;
    background: transparent;

    span {
      display: block;
      height: 7px;
      width: 33px;
      background: red;
      margin: 8px 0;
    }
  }
`;
export const Logo = styled.div`
  a {
    font-size: 2rem;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
    margin: 0 8px;
    cursor: pointer;
  }
`;
