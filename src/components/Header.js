//shortcut is rfce
import React from "react";
import styled from "styled-components";

function header() {
	return (
		<Container>
			<TRitle id='title'>Anthony Godoy</TRitle>
			<Wrap>Home</Wrap>
			<Wrap>About</Wrap>
			<Wrap>Work</Wrap>
			<Wrap>Contact</Wrap>
		</Container>
	);
}

export default header;

const Container = styled.nav`
	display: flex;
	flex-direction: row;
	background: rgba(0, 0, 0, 0.6);
	font-size: 2vw;
`;

const TRitle = styled.div`
	flex: 1;
	display: flex;
	padding: 12px 20px;
	margin: 0%;
`;

const Wrap = styled.div`
	display: flex;
	padding: 12px 20px;
	margin: 0%;
	transition: 250ms all;

	&:hover {
		cursor: pointer;
		font-size: 2.5vw;
	}
`;
