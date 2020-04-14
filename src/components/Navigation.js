import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    /* width: 80%; */
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    font-size: 1.4rem;
`

const Div = styled.div`
    /* width: 75%; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    justify-content: space-evenly;
    align-items: center;
`

export default function Navigation() {
    return (
        <Nav>
            <h1 style={{ justifySelf: 'flex-start' }}>CRAM</h1>
            <Div>
                <NavLink to='/decks' style={{ color: 'green', textDecoration: 'none' }}>Create Flashcards</NavLink>
                <NavLink to='/decks' style={{ color: 'green', textDecoration: 'none' }}>iPhone</NavLink>
                <NavLink to='/decks' style={{ color: 'green', textDecoration: 'none' }}>Android</NavLink>
                <NavLink to='/register' style={{ color: 'green', textDecoration: 'none' }}>Sign in</NavLink>
            </Div>
        </Nav>
    )
}
