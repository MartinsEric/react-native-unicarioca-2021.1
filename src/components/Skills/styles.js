import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #9e9e9e;
  margin-bottom: 5px;
`;

export const BarContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.View`
  width: ${props => (props.grade * 85) / 10 + '%'};
  height: 7px;
  border-radius: 15px;
  background-color: ${props => props.studentBar ? '#2196f3' : '#ff0081'};
`;

export const BarLabel = styled.Text`
  color: ${props => props.studentBar ? '#2196f3' : '#ff0081'};
  font-size: 10px;
  margin-left: 7px;
`;
