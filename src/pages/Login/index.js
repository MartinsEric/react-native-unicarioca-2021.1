import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Container,
  CaixaLogin,
  ContainerBotaoes,
  ContainerInputs,
  Botao,
  BotaoTexto,
  InputText,
  Input,
  EsqueciSenha,
  EsquecinhaTexto,
  ContainerBotoes,
  ContainerBotaoLogin,
  BotaoLogin,
  BotaoLoginTexto,
  Logo,
  ContainerTexto,
  TextoChamada,
  BackgrounImage
} from './styles';
import logoImg from '../../../assets/logo.png';
import img from '../../../assets/login_background.png';

export default function Login() {

  const [botaoAtual, setBotaoAtual] = useState('aluno')

  return (

    <Container>
        <BackgrounImage source ={img} />
      <Logo>
        <Image source={logoImg}
          style={{
            width: 310, height: 100
          }} />
      </Logo>
      <ContainerTexto>
        <TextoChamada>
          Problemas para formar
  </TextoChamada>
        <TextoChamada>
          um grupo de trabalho?
  </TextoChamada>
        <TextoChamada>
          O Grupou resolve!
  </TextoChamada>
      </ContainerTexto>


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

        <EsqueciSenha>
          <EsquecinhaTexto>
            Esqueci minha senha.
           </EsquecinhaTexto>
        </EsqueciSenha>

        <ContainerBotaoLogin>

          <BotaoLogin inverter={false}>

            <BotaoLoginTexto inverter={false}>
              cadastre-se
            </BotaoLoginTexto>

          </BotaoLogin>

          <BotaoLogin inverter={true}>

            <BotaoLoginTexto inverter={true}>
              entrar
            </BotaoLoginTexto>

          </BotaoLogin>
        </ContainerBotaoLogin>

      </CaixaLogin>
    </Container>
  );
}