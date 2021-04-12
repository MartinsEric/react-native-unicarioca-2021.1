import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  CaixaLogin,
  ContainerBotaoes,
  ContainerInputs,
  Botao,
  BotaoTexto,
  InputText,
  Input
} from './styles';
export default function Login() {

  const [botaoAtual, setBotaoAtual] = useState('aluno')

  return (
    <Container>
      <CaixaLogin>
        <ContainerBotaoes>
          <Botao ultimoClick={botaoAtual == 'aluno' ? true : false}
            onPress={() => { setBotaoAtual('aluno') }}>
            <BotaoTexto ultimoClick={botaoAtual == 'aluno' ? true : false} >Aluno</BotaoTexto>
          </Botao>
          <Botao ultimoClick={botaoAtual == 'professor' ? true : false}
            onPress={() => { setBotaoAtual('professor') }}>
            <BotaoTexto ultimoClick={botaoAtual == 'professor' ? true : false} >Professor</BotaoTexto>
          </Botao>
        </ContainerBotaoes>
        <ContainerInputs>

        <InputText>Email</InputText>
        <Input />
        <InputText>Senha</InputText>
        <Input />

        </ContainerInputs>
      </CaixaLogin>
    </Container>
  );
}