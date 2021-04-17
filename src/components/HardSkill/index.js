import React from 'react';
import { StudentGrade, StudentGradeContainer } from '../shared/styles/StudentGrade';
import { 
  Container,
  TechContainer,
  TechName 
} from './styles'


export default function HardSkill({ studentGrade,tech }) {
  return (
    <Container>
      <TechContainer>
        <TechName>{tech}</TechName>
      </TechContainer>
      <StudentGradeContainer>
        <StudentGrade>{studentGrade}</StudentGrade>
      </StudentGradeContainer>
    </Container>
  );
}