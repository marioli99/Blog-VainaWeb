import React from "react";
import Logo from "../../img/logo.png";
import {Nav, Ul , Li, Title, ContainerHeader, TextHeader} from "../Header/HeaderStyle";
import Card from "../../assets/Card/Card";
export default function Header (){
    return(
        <ContainerHeader>
        
        <Nav>
            <img src={Logo} alt = "Logo vai na web"></img>
            <Ul>
                <Li><a href="/">Sobre</a></Li>
                <Li><a href="/">Formação</a></Li>
                <Li><a href="/">Equipe</a></Li>
                <Li><a href="/">Eventos</a></Li>
                <Li><a href="/">Contatos</a></Li>
                
            </Ul>
        </Nav>

        <Title>// Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</Title>
        <Card/>
        <TextHeader>Link para o formulário: bit.ly/CarreiraVaiNaWeb</TextHeader>
        </ContainerHeader>
    )
}