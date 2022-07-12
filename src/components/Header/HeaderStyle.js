import styled from "styled-components";
import Background from "../../img/fundo.png";

export const ContainerHeader = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #ffac2d;
  margin-left: 2rem;
  font-size: 4vw;
  margin-top: 8%;
  margin-left: 8%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  img {
    width: 5vw;
    height: 8vh;
    margin-left: 2%;
    margin-top: 2%;
  }
`;
export const Li = styled.li`
  display: inline-block;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  /* border: solid 2px aqua; */
  width: 8vw;
  margin-top: 3%;

  a {
    text-decoration: none;
    color: #fff;
  }

  :hover {
    border: solid 2px #ffac2d;
    border-radius: 50px;
  }
`;
export const Ul = styled.ul`
  display: flex;
  margin-left: 25%;
`;
