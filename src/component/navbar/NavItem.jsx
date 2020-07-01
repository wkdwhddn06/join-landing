import React from 'react';
import styled from 'styled-components';


function NavItem({pressed, name}) {
    return(
        <Container pressed={pressed}>
            <Text >{name}</Text>
        </Container>
    )
}

const Container = styled.div`
    height: auto;
    width: auto;
    padding-left: 4px;
    padding-right: 4px;
    margin: 8px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 24px;
    color: ${(props) => props.pressed ? "white" : "black" };
    background-color: ${(props) => props.pressed ? "black" : "white" };
`

const Text = styled.div`
    margin: 10px;
    font-weight: 400;
    align-self: center;
    font-size: 16px;
`

export default NavItem