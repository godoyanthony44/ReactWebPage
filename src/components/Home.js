import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<Container>
			<img
				src='https://firebasestorage.googleapis.com/v0/b/website-a7ed4.appspot.com/o/IMG-1302.jpg?alt=media&token=c714317a-1a50-48ea-acaf-3e928e7f0e16'
				alt='anthony godoy'
			/>
			<h1>Hello, I'm Anthony.</h1>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	position: relative;
	margin: 0 0 0 0;
	padding: 5vw;

	h1 {
		position: absolute;

		font-size: 3vw;
		overflow-x: hidden;
		white-space: wrap;
		overflow-y: hidden;
	}
	img {
		z-index: -1;
		width: 400px;
		postition: absolute;
		opacity: 30%;
		top: 100px;
		left: 200px;
	}
`;
