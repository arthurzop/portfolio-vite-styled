import './App.css'
import * as S from './styledComponents'
import * as I from "iconoir-react"
import hero from '../public/hero.png'
import eu from '../public/eu.png'
import { useState } from 'react'
import Skill from './components/skill'


function App() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <S.Body>
      <S.Header>
        <S.Title><I.Code /> artur medeiros</S.Title>
        <S.Nav>
          <S.NavItem>home</S.NavItem>
          <S.NavItem>about me</S.NavItem>
          <S.NavItem>portfolio</S.NavItem>
          <S.NavItem>contact</S.NavItem>
        </S.Nav>
      </S.Header>
      <S.Section>
        <S.SectionColumn>
          <S.SectionTitle>
            web developer & designer <br />
            // ui/ux focused
          </S.SectionTitle>
          <S.Button>get to know me!</S.Button>
          <S.Redes>
            <S.NavItem href="https://github.com/arthurzop" target="_blank">
              <I.Github />
            </S.NavItem>
            <S.NavItem href="https://instagram.com/arthurzop" target="_blank">
              <I.Instagram />
            </S.NavItem>
            <S.NavItem href="https://www.linkedin.com/in/artur-medeiros-7169b8266/">
              <I.Linkedin />
            </S.NavItem>
          </S.Redes>
        </S.SectionColumn>
        <S.HeroImage src={hero}></S.HeroImage>
      </S.Section>
      <S.Divider></S.Divider>
      <S.AboutSection>
        <S.AboutImage src={eu}></S.AboutImage>
        <S.Title style={{borderBottom: '3px solid #2D755F'}}>artur medeiros :P</S.Title>
        <S.SubTitle>i'm 20 years old, from são paulo - brazil. <br />
          currently in the third semmester of system analysis at senai suiço-brasileira <br />
          focused in front-end, web development and ui/ux design.
        </S.SubTitle>

        <S.Title>hard skills:</S.Title>
        <S.SkillContainer>
          <Skill
            titulo="html"
            skills={[2, 3, 1, 1, 1]}
            unSkill={[]} />
          <Skill titulo="css" skills={[2, 3, 1, 1]} unSkill={[1]} />
          <Skill titulo="styled components" skills={[2]} unSkill={[1, 2, 3, 4]} />
          <Skill titulo="git" skills={[2, 3]} unSkill={[3, 3, 3]} />
        </S.SkillContainer>
        <S.SkillContainer>
          <Skill titulo="react js" skills={[2, 3, 1, 2]} unSkill={[2]} />
          <Skill titulo="javascript" skills={[2, 3, 1, 1, 1]} unSkill={[]} />
          <Skill titulo="figma" skills={[2, 3, 1, 1]} unSkill={[2]} />
          <Skill titulo="react native" skills={[2, 3,]} unSkill={[2, 3, 4]} />
        </S.SkillContainer>
      </S.AboutSection>
      <S.Divider/>
      <S.Section>
        <S.Title>my portfolio</S.Title>
        <S.SubTitle>these are some of past projects i've done</S.SubTitle>
        
      </S.Section>
    </S.Body>
  )
}

export default App

