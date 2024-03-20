import styled from "styled-components";
import * as I from "iconoir-react"

export const Body = styled.body`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: monospace;
    color: #263138;
    background-color: #FBFBFB;
   
`

export const Header = styled.header`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(10px);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const SubContainer = styled(Container)`
    flex-direction: column;
`

export const Title = styled(Container)`
    font-size: 2.5em;
    gap: 1vw;
    font-weight: bold;
    
`

export const Nav = styled(Container)`
    align-items: center;
    gap: 2vw;
`

export const NavItem = styled.a`
    text-decoration: none;
    color: #263138;
    font-size: 1.8em;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid #263138
    }
`

export const Section = styled.section`
    display: flex;
    width: 100%;
`

export const SectionColumn = styled(Section)`
    width: 50%;
    height: 100vh;
    flex-direction: column;
    align-items: self-start;
    justify-content: space-evenly;
    padding-inline-start: 10vw;
`

export const SectionTitle = styled(Title)`
    font-size: 4em;
`

export const Button = styled.button`
    border: none;
    background-color: #263138;
    color: #FBFBFB;
    padding: 2vh 3vw;
    font-size: 1.3em;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        transform: scale(1.01);
        background-color: #263138ea;
        transition: all .5s;
    }
`

export const Redes = styled(Container)`
    font-size: 1.4em;
    gap: 2vw;
    cursor: pointer;
    height: 5vh;

`

export const Image = styled.img`
    height: 700px;
    width:  700px;
    margin-inline-start: -5vw
`
