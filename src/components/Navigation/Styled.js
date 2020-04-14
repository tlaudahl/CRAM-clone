import styled from 'styled-components'

export const ContainerDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    background-color: #fff;
`

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25vw;
    font-size: 1.8rem;
`

export const Logo = styled.div`
    color: #31a2ab;
    font-size: 2rem;
    margin-left: 15px;
`

export const linkStyle = {
    color: 'green', 
    textDecoration: 'none'
}