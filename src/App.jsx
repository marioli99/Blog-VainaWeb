import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Formacao from "./components/Formacao/Formacao";

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Montserrat", sans-serif;
}


`;
export default function App(){
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Sobre/>
    <Formacao/>
    </>
  )

}