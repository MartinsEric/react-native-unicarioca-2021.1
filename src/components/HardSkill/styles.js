import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-right: 20px;
  position: relative;
`;

export const TechContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 6px;
  border-color: #ff0081;

  align-items: center;
  justify-content: center;
`;

export const TechName = styled.Text`
  font-size: 11px;
  color: #ff0081;
`;