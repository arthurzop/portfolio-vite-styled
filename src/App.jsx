import './App.css'
import * as S from './styledComponents'
import * as I from "iconoir-react"
import hero from '../public/hero.png'
import { useState } from 'react'


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
            <S.NavItem href="#">
              <I.Linkedin />
            </S.NavItem>
          </S.Redes>
        </S.SectionColumn>
        <S.SectionColumn>
          <S.Image src={hero}></S.Image>
        </S.SectionColumn>
      </S.Section>
      <S.Section>
      </S.Section>
    </S.Body>
  )
}

export default App
