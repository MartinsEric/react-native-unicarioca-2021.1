import styled from 'styled-components/native';
/*OBSERVAÇÃO
FLEX => os componentes (filhos) estaram se acomodando  relativamente no espaço.

*/
export const Container = styled.View`
background-color: #333;
flex: 1;
flex-direction: column;
`;

export const SubConteinerUm= styled.View`
background-color: #e6e6e6;
flex: 1;
flex-direction: column; /* direção dos componentes filhos*/;
align-items:center; /*dependente do flex-direction*/
justify-content: space-around; /*dependente do flex-direction*/
`;
export const Xpto = styled.View`
flex:1;
flex-direction: row;
align-items: flex-end;
/*background-color: #666;*/
`;

export const SubConteinerUmColuna= styled.View`
flex: 1;
flex-direction: column; /* direção dos componentes filhos*/;
`;

export const SubConteinerDois= styled.View`
background-color: #ccc;
flex: 1
`;


export const SubConteinerTres=styled.View`
background-color: #333;
flex: 1
`;

export const TextConteiner = styled.Text`
color: #000;
`;

