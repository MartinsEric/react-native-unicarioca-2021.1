import React from 'react';
import { StudentGrade, StudentGradeContainer } from '../shared/styles/StudentGrade';
import { 
  Container,
  StudentImageContainer, 
  StudentImage,
  StudentName,
  Tech
} from './styles';


export default function StudentSkill({studentName, studentGrade,tech, studentImage}) {
  return (
    <Container>
      <StudentImageContainer>
        <StudentImage source={studentImage}></StudentImage>
        <StudentGradeContainer>
          <StudentGrade>{studentGrade}</StudentGrade>
        </StudentGradeContainer>
      </StudentImageContainer>
      <StudentName>{studentName}</StudentName>
      <Tech>{tech}</Tech>
    </Container>
  );
}