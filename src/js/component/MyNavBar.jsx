import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const MyNavBar = props => {
	return (
		<Navbar classname="nav" bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#startbootstrap">
					The Snitch Madrid
				</Navbar.Brand>
				<Nav className="me-right">
					<Nav.Link href="#home">{props.buttonOne}</Nav.Link>
					<Nav.Link href="#about">{props.buttonTwo}</Nav.Link>
					<Nav.Link href="#services">{props.buttonThree}</Nav.Link>
					<Nav.Link href="#contact">{props.buttonFour}</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
MyNavBar.propTypes = {
	buttonOne: PropTypes.string,
	buttonTwo: PropTypes.string,
	buttonThree: PropTypes.string,
	buttonFour: PropTypes.string
};
export default MyNavBar;
