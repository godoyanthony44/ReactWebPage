//shortcut is rfce
import React from 'react'
import styled from 'styled-components';

function header() {

    return (
        <Container>
            
                <TRitle id ="title">
                Anthony Godoy
                </TRitle>
                <Wrap>
                About
                </Wrap>
                <Wrap>
                Work
                </Wrap>
                <Wrap>
                Contact
                </Wrap>
            
        </Container>
    )
}

export default header

const Container = styled.nav`
display:flex;
flex-direction: row;
background:rgba(0,0,0,.8);






`;

const TRitle = styled.div`
flex:1;
font-family: Iceland;
font-size: 20px;
display:flex;
color:white;
padding: 12px 20px;
margin:0%;
`;

const Wrap = styled.div`
font-family: Iceland;
font-size: 20px;
display:flex;
color:white;
padding: 12px 20px;
margin:0%;
transition: 250ms all;

&:hover{
    cursor: pointer;
    font-size:25px;
}

`;