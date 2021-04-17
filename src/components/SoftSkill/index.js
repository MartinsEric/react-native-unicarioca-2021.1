import React from 'react';
import { 
  Container,
  SkillName,
} from './styles'


export default function SoftSkill({ skill }) {
  return (
    <Container>
      <SkillName>{skill}</SkillName>
    </Container>
  );
}