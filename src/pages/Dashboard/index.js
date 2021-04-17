
import React from 'react';
import { Image, ScrollView } from 'react-native';
import Skills from '../../components/Skills'
import StudentSkill from '../../components/StudentSkill';
import HardSkill from '../../components/HardSkill';
import SoftSkill from '../../components/SoftSkill';
import Subject from '../../components/Subject';
import { SessionTitle } from '../../components/shared/styles/SessionTitle';
import { 
  Container, 
  PageTitle, 
  SessionContainer,
  SkillsList,
  BackgroundImage,
  HorizontalList,
  Main,
  Footer,
  ContactContainer,
  ContactText,
  SocialMediaList,
  SocialMediaIcon,
  Logo,
} 
from './styles';

import studentImageExample from '../../../assets/studentPhotoExample.jpg'
import studentImageExample2 from '../../../assets/studentPhotoExample2.jpeg'
import studentImageExample3 from '../../../assets/studentPhotoExample3.jpeg'
import studentImageExample4 from '../../../assets/studentPhotoExample4.jpeg'
import studentImageExample5 from '../../../assets/studentPhotoExample5.jpeg'
import studentImageExample6 from '../../../assets/studentPhotoExample6.jpeg'
import facebookIcon from '../../../assets/logo_facebook.png'
import instagramIcon from '../../../assets/logo_instagram.png'
import linkedinIcon from '../../../assets/logo_linkedin.png'
import logo from '../../../assets/logo.png'

import backgroundImg from '../../../assets/grafismo_background.png';


export default function Dashboard() {
  return (
    <ScrollView>
      <Container>
        <Main>
          <PageTitle>Dashboard</PageTitle>

          <BackgroundImage source={backgroundImg}></BackgroundImage>
          
          <SessionContainer>
            <SessionTitle>Comparativo de Skills</SessionTitle>
            <SkillsList>
              <Skills 
                label={'HTML'} 
                studentGrade={7} 
                classGrade={6} 
              />

              <Skills 
                label={'Manipulação de imagem'} 
                studentGrade={6.7} 
                classGrade={7.5} 
              />

              <Skills 
                label={'Prototipagem'} 
                studentGrade={10} 
                classGrade={5.5} 
              />

              <Skills 
                label={'Ilustração'} 
                studentGrade={5.8} 
                classGrade={7.2} 
              />

              <Skills 
                label={'Wireframe'} 
                studentGrade={5.5} 
                classGrade={7.4} 
              />
            </SkillsList>
          </SessionContainer>

          <SessionContainer>
            <SessionTitle>Alunos top skills</SessionTitle>
            <ScrollView horizontal={true}>
              <HorizontalList>

                <StudentSkill 
                  studentName={'Ricardo Barbosa'}
                  studentImage={studentImageExample2}
                  studentGrade={'9,5'}
                  tech={'JavaScript'}
                ></StudentSkill>

                <StudentSkill 
                  studentName={'Renato Soares'}
                  studentImage={studentImageExample3}
                  studentGrade={'9,0'}
                  tech={'React native'}
                ></StudentSkill>
                
                <StudentSkill 
                  studentName={'Saulo Cardoso'}
                  studentImage={studentImageExample4}
                  studentGrade={'9,0'}
                  tech={'MySQL'}
                ></StudentSkill>
                
                <StudentSkill 
                  studentName={'Vinicius Cardoso'}
                  studentImage={studentImageExample5}
                  studentGrade={'9,0'}
                  tech={'Java'}
                ></StudentSkill>

                <StudentSkill 
                  studentName={'Ariel Souza'}
                  studentImage={studentImageExample6}
                  studentGrade={'9,0'}
                  tech={'IA'}
                ></StudentSkill>

                <StudentSkill 
                  studentName={'Eric Martins'}
                  studentImage={studentImageExample}
                  studentGrade={'8,0'}
                  tech={'NodeJS'}
                ></StudentSkill>

              </HorizontalList>
            </ScrollView>
          </SessionContainer>

          <SessionContainer>
            <SessionTitle>Minhas top hard skills</SessionTitle>
            <HorizontalList>
              <HardSkill studentGrade={'10,0'} tech={'NodeJs'}></HardSkill>
              <HardSkill studentGrade={'9,0'} tech={'React'}></HardSkill>
              <HardSkill studentGrade={'7,0'} tech={'React Native'}></HardSkill>
            </HorizontalList>
          </SessionContainer>

          <SessionContainer>
            <SessionTitle>Minhas top soft skills</SessionTitle>
            <HorizontalList>
              <SoftSkill skill={'Liderança'}></SoftSkill>
              <SoftSkill skill={'Empatia'}></SoftSkill>
              <SoftSkill skill={'Gestão de conflitos'}></SoftSkill>
              <SoftSkill skill={'Comunicação'}></SoftSkill>
            </HorizontalList>
          </SessionContainer>
          
          <SessionContainer>
            <Subject subjectName={'Gestão do Design'} progressPorcentage={78}></Subject>
          </SessionContainer>

          <SessionContainer>
          <Subject subjectName={'Fotografia'} progressPorcentage={60}></Subject>
          </SessionContainer>

          <SessionContainer>
              <Subject subjectName={'Webdesign'} progressPorcentage={100}></Subject>
            </SessionContainer>
                
        </Main>
        <Footer>
          <ContactContainer>
            <ContactText>Contato</ContactText>
            <ContactText>grupou_contato@gmail.com</ContactText>
          </ContactContainer>

          <SocialMediaList>
            <SocialMediaIcon source={linkedinIcon}></SocialMediaIcon>
            <SocialMediaIcon source={instagramIcon}></SocialMediaIcon>
            <SocialMediaIcon source={facebookIcon}></SocialMediaIcon>
          </SocialMediaList>

          <Logo >
            <Image source={logo} style={{ width: 180, height: 60 }}></Image>
          </Logo>
        </Footer>
      </Container>
    </ScrollView>
  );
}