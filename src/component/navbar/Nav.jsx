import React from 'react';
import NavItem from './NavItem.jsx'
import styled from "styled-components"

function Nav() {
    return(
        <NavContainer className="Nav">
            <NavItem name="JOIN" pressed={true}/>
            <NavItem name="CUSTOM" pressed={false}/>
            <NavItem name="SUPPORT" pressed={true}/>
            <NavItem name="BUSINESS" pressed={false}/>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    height: 55px;
    width: auto;
    border-bottom: 0.2px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export default Nav;