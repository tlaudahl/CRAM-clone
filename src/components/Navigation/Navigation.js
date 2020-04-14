import React from 'react'
import { NavLink } from 'react-router-dom'
import { linkStyle, ContainerDiv, Nav, Logo, NavLinks } from './Styled';

export default function Navigation() {
    return (
        <ContainerDiv>
            <Nav>
                <Logo>FlashCards</Logo>
                <NavLinks>
                    <NavLink to='/decks/create' style={linkStyle}>Create Deck</NavLink>
                    <NavLink to='/decks' style={linkStyle}>Decks</NavLink>
                    <NavLink to='/profile' style={linkStyle}>Profile</NavLink>
                    <NavLink to='/register' style={linkStyle}>Register</NavLink>
                </NavLinks>
            </Nav>
        </ContainerDiv>
    )
}
