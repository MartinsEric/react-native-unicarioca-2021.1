import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 150px;
  margin-top: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const StudentImageContainer = styled.View`
  width: 100px;
  height: 100px;
  border-width: 3px;
  border-color: #ff0081;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StudentImage = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
`;

export const StudentName = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: bold;
`;

export const Tech = styled.Text`
  color: #9e9e9e;
`;