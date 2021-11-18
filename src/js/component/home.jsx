import React from "react";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
// import Mycard from "../..src/js/component/Mycard.jsx/";
import Mycard from "./Mycard.jsx";
import MyNavbar from "./MyNavBar.jsx";

const CARDINFO = [
	//array con objetos
	{
		photo:
			"https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-rene-asmussen-1581384.jpg&fm=jpg",
		title: "RESTAURANTES",
		text:
			"Conoce los mejores restaurantes de Madrid, una oportunidad para comer de lujo. Descubre nuestros platos tradicionales, junto con materias primas de excelente calidad a través de una ruta de restaurantes que te explicamos detalladamente a continuación."
	},
	{
		photo:
			"https://images.pexels.com/photos/3044/restaurant-love-romantic-dinner.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		title: "TAPAS",
		text:
			"Ir de tapas es uno de los planes más solicitados cuando se planea quedar con amigos. Sentarse en una terraza disfrutando de una comida deliciosa y de una compañía inigualable es un gran placer.Muchas son las opciones para comer que tienes en la capital,te facilitamos una lista con bares de tapas."
	},
	{
		photo:
			"https://images.pexels.com/photos/3379264/pexels-photo-3379264.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-3379264.jpg&fm=jpg",
		title: "OCIO NOCTURNO",
		text:
			"Aquí están las listas y reservas para las mejores fiestas en discotecas de Madrid. Encontrarás una gran oferta de ocio nocturno que resulta ideal para bailar hasta altas horas de la noche. salas de fiesta que destacan por su calidad musical, su buen ambiente y su reputación"
	},
	{
		photo:
			"https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?cs=srgb&dl=pexels-oziel-g%C3%B3mez-2846814.jpg&fm=jpg",
		title: "CULTURA Y ARTE",
		text:
			"Conciertos, obras de teatro, exposiciones, talleres… te mostramos propuestas de ocio y cultura para que planifiques tu agenda semanal."
	}
];

const Home = () => {
	let cardsContainer = CARDINFO.map((parameter, index) => {
		return (
			<Mycard
				key={index.toString()}
				photo={parameter.photo}
				title={parameter.title}
				text={parameter.text}
			/>
		);
	});
	return (
		<div>
			<MyNavbar
				buttonOne="Home"
				buttonTwo="About"
				buttonThree="Services"
				buttonFour="Contact"
			/>
			<Jumbotron />
			<div className="flex">{cardsContainer}</div>
		</div>
	);
};

export default Home;
