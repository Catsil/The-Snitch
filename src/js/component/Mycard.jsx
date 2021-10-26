import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Mycard = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.photo} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="primary">Seguir leyendo</Button>
			</Card.Body>
		</Card>
	);
};

{
	Mycard.propTypes = {
		photo: PropTypes.string,
		title: PropTypes.string,
		text: PropTypes.string
	};
}

export default Mycard;
