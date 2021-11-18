import React from "react";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const Jumbotron = () => {
	return (
		<div className="principal">
			<h1 className="display-3">The Snitch Madrid</h1>
			<p className="lead">
				Los lugares mas interesantes para visitar en Madrid.
			</p>

			<Carousel className="carru">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="First slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Plaza Mayor</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/947181/pexels-photo-947181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt="Second slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Parque El Retiro</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/5522624/pexels-photo-5522624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="Third slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Puerta de Alcalá</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1547738/pexels-photo-1547738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Palacio Real</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/3845970/pexels-photo-3845970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Estadio Bernabéu</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/5522616/pexels-photo-5522616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt="First slide"
					/>
					<Carousel.Caption className="capt">
						<h3>Palacio de Cristal</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Jumbotron;
