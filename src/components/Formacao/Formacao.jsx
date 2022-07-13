import React from "react";

import { ContainerFormacao, Text, MiniTitle, MaxTitle, MiniImg, MaxImg,ContainerText  } from "./FormacaoStyle";

export default function Formacao () {
    return (
        <ContainerFormacao>
            <ContainerText>
            <MaxTitle>Formação</MaxTitle>
        <MiniImg></MiniImg>
        <MiniTitle>FRONT-END</MiniTitle>
        <Text>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</Text>

        <MiniImg></MiniImg>
        <MiniTitle>BACK-END</MiniTitle>
        <Text>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</Text>
            </ContainerText>
       

        <MaxImg></MaxImg>
        </ContainerFormacao>
    )
}