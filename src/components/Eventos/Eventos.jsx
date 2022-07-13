import React from "react";
import Meet from "../../img/Meet.png"
import { ContainerEventos, SubContainerEventos, ContainerImg, Text, SubTitle, TitlePrincipal, Teste} from "./EventosStyle";
export default function Eventos (){
    return(
        <ContainerEventos>
        <TitlePrincipal>Eventos</TitlePrincipal>
        <SubContainerEventos>
        
        
        <ContainerImg>
        <img src={Meet} alt = "Video Coferência Tech Girls"/>
        </ContainerImg>
        <Teste>
        <SubTitle>
        Tech Girls
        </SubTitle>
        <Text>
        Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.
        </Text>
        </Teste>
        </SubContainerEventos>
        </ContainerEventos>
    )
}