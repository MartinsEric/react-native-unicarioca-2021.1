import React from 'react';
import { Image, Text } from 'react-native';

import {
  Container,
  Logo,
  BotaoFechar,
  Header,
  Main,
  TextoPergunta,
  BotoesContainer,
  Botao,
  BotaoTexto
} from './styles';

import logoImg from '../../../assets/logo.png';
import IconeFechar from '../../../assets/icone_fechar.png';

export default function ProfessorOuAluno() {

  return (
    <Container>
      <Header>
        <BotaoFechar>
          <Image source={IconeFechar} style={{ width: 25, height: 25 }}></Image>
        </BotaoFechar>
        <Logo>
          <Image source={logoImg} style={{ width: 150, height: 50 }}></Image>
        </Logo>
      </Header>

      <Main>
        <TextoPergunta>Você é aluno ou professor?</TextoPergunta>
        <BotoesContainer>

          <Botao>
            <BotaoTexto>Aluno</BotaoTexto>
          </Botao>

          <Botao>
          <BotaoTexto>Professor</BotaoTexto>
          </Botao>
        </BotoesContainer>
      </Main>

    </Container>
  );
}