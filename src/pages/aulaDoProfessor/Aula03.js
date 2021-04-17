/*ASSUNTO DA  AULA */
import React from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  TextConteiner,
  SubConteinerUm,
  SubConteinerDois,
  SubConteinerTres,
  SubConteinerUmColuna,
  Xpto

} from './styles';
export default function App() {
  return (
    <Container>
      <SubConteinerUm>
        <Xpto>
        <Text >Texto 01</Text>
        <Text >Texto 02</Text>
        <Text >Texto 03</Text>
        </Xpto>
        <SubConteinerUmColuna>
          <Text>caixa de texto usuario</Text>
          <Text>caixa de texto usuario</Text>
          <Text>caixa de texto usuario</Text>
        </SubConteinerUmColuna>
      </SubConteinerUm>
      <SubConteinerDois>
        <TextConteiner>texte</TextConteiner>
      </SubConteinerDois>
      <SubConteinerTres>
      </SubConteinerTres>
    </Container>
  );
}
