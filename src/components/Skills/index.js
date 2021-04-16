import React from 'react';
import { Container, Label, BarContainer, Bar, BarLabel } from './styles';

export default function Skills({label, studentGrade, classGrade}) {
  return (
    <Container>
      <Label>{label}</Label>
      <BarContainer>
        <Bar 
          studentBar={true} 
          grade={studentGrade}
        ></Bar>
        <BarLabel studentBar={true}>você</BarLabel>
      </BarContainer>
      <BarContainer>
        <Bar 
          studentBar={false}
          grade={classGrade}
        ></Bar>
        <BarLabel studentBar={false}>turma</BarLabel>
      </BarContainer>
    </Container>
  );
}