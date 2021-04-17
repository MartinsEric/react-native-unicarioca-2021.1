import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 20px 20px;
  position: relative;
`;
export const Header = styled.View`
  justify-content: center;
  position: relative;
`;

export const Logo = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export const BotaoFechar = styled.View`
  position: absolute;
  right: 0;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextoPergunta = styled.Text`
 color: #000;
 font-size: 30px;
 font-weight: bold;
 text-align: center;
 margin-bottom: 20px;
`;

export const BotoesContainer = styled.View`
  width: 75%;
  flex-direction: row;
  justify-content: space-around;
  
`;

export const Botao = styled.TouchableOpacity`
  width: 110px;
  height: 55px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: #800080;
  border-radius: 5px;
`;

export const BotaoTexto = styled.Text`
  color: #800080;
  font-weight: bold;
`;

