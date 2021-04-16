import styled from 'styled-components/native';


export const Container = styled.View`
flex:1;
flex-direction: column;
align-items: center;
justifyContent: flex-end;
background-color:#AB1B71;
padding: 10px 10px 0px 10px;
`;

export const Logo = styled.View`
flex:1;
justify-content: center;
align-items: center;
`;
export const ContainerTexto = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
export const TextoChamada = styled.Text`
color: #fff;
font-size: 20px;
text-align: center;
`;
export const   BackgrounImage= styled.Image`
position: absolute;
width:230%;
height:120%;

`;

export const CaixaLogin = styled.View`
background-color: #fff;
width: 100%;
height: 50%;
border-top-right-radius:25px;
border-top-left-radius:25px;
padding:20px;
`;

export const ContainerBotaoes = styled.View`
flex-direction:row;
`;

export const Botao = styled.TouchableOpacity`
flex:1;
align-items: center;
justify-content: center;
height:60px;
border-bottom-width: 4px;
border-bottom-color: ${props => props.ultimoClick ? "#AE1B73" : "#fff"};
margin: 0px 5px;
`;

export const BotaoTexto = styled.Text`
font-size:20px;
color:  ${props => props.ultimoClick ? "#673f66" : "#ccc"};
`;

export const ContainerInputs = styled.View`
margin-top:30px;
`;

export const InputText = styled.Text`
font-size:18px;
color: #b4b8c6;
`;

export const Input = styled.TextInput`
border: 1px solid #ccc;
height: 50px;
border-radius: 5px;
padding: 0px 20px;
margin-top: 5px;
`;
export const EsqueciSenha = styled.TouchableOpacity`
align-items:flex-end;
`;
export const EsquecinhaTexto = styled.Text`
color:#ae1b73;
`;

export const ContainerBotaoLogin = styled.View`
flex-direction: row;
margin-top :20px;
justify-content: space-between;
`;

export const BotaoLogin = styled.TouchableOpacity`
flex:1;
height:60px;
border:1px solid #ae1b73;
border-radius: 5px;
justify-content: center;
align-items: center;
margin-right: ${props => props.inverter ? "0px" : "10px"};
background-color: ${props => props.inverter ? "#AE1B73" : "#fff"};
`;

export const BotaoLoginTexto = styled.Text`
color: ${props => props.inverter ? "#fff" :"#AE1B73" }
font-weight:bold;
`;
