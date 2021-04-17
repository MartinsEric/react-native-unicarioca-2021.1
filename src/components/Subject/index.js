import React from 'react';
import { SessionTitle } from '../shared/styles/SessionTitle';

import studentImageExample from '../../../assets/studentPhotoExample.jpg'
import studentImageExample2 from '../../../assets//studentPhotoExample2.jpeg'
import studentImageExample3 from '../../../assets//studentPhotoExample3.jpeg'
import studentImageExample4 from '../../../assets//studentPhotoExample4.jpeg'
import studentImageExample5 from '../../../assets//studentPhotoExample5.jpeg'
import studentImageExample6 from '../../../assets//studentPhotoExample6.jpeg'


import { 
  Container,
  Header,
  SeeMore,
  ButtonText,
  SubHead,
  StudentContainer,
  StudentImage,
  OnlineSimbol,
  StudentList,
  ProgressContainer,
  Progress,
  ProgressBar,
  ProgressPorcentage
} from './styles'


export default function Subject({ subjectName, progressPorcentage }) {
  return (
    <Container>
      <Header>
        <SessionTitle>{subjectName}</SessionTitle>
        <SeeMore>
          <ButtonText>Ver mais</ButtonText>
        </SeeMore>
      </Header>

      <SubHead>AV1</SubHead>
      
      <StudentList>
          <StudentContainer>
            <StudentImage source={studentImageExample}></StudentImage>
            <OnlineSimbol></OnlineSimbol>
          </StudentContainer>

          <StudentContainer>
            <StudentImage source={studentImageExample2}></StudentImage>
            <OnlineSimbol></OnlineSimbol>
          </StudentContainer>

          <StudentContainer>
            <StudentImage source={studentImageExample3}></StudentImage>
          </StudentContainer>

          <StudentContainer>
            <StudentImage source={studentImageExample4}></StudentImage>
            <OnlineSimbol></OnlineSimbol>
          </StudentContainer>

          <StudentContainer>
            <StudentImage source={studentImageExample5}></StudentImage>
          </StudentContainer>

          <StudentContainer>
            <StudentImage source={studentImageExample6}></StudentImage>
            <OnlineSimbol></OnlineSimbol>
          </StudentContainer>
        </StudentList>
    
      <ProgressContainer>
        <SubHead>Tarefas concluídas</SubHead>
        <Progress>
          <ProgressBar porcentage={progressPorcentage}></ProgressBar>
          <ProgressPorcentage>{progressPorcentage + '%'}</ProgressPorcentage>
        </Progress>
      </ProgressContainer>
    </Container>
  );
}