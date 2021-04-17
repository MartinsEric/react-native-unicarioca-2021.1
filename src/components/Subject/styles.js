import styled from 'styled-components/native';

export const Container = styled.View`
  padding-right: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SeeMore = styled.TouchableOpacity`
  width: 75px;
  height: 35px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: #800080;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #800080;
  font-weight: bold;
`;

export const SubHead = styled.Text`
  color: #9e9e9e;
`;

export const StudentContainer = styled.View`
  width: 50px;
  height: 50px;
  margin-top: 25px;

  border-radius: 50px;

  position: relative;
`;

export const StudentImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const OnlineSimbol = styled.View`
  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: #32CD32;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const StudentList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ProgressContainer = styled.View`
  margin-top: 25px;
`;

export const Progress = styled.View`
  flex-direction: row;
  margin-top: 3px;
  align-items: center;
  justify-content: flex-start;
`;

export const ProgressBar = styled.View`
  width: ${props => (props.porcentage * 90) / 100 + '%'};
  height: 7px;
  border-radius: 15px;
  background-color: #ffc107;
`;

export const ProgressPorcentage = styled.Text`
  margin-left: 7px;
  color: #ffc107;
`;
