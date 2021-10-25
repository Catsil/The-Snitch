import React from "react";
import MyNavBar from "./MyNavBar.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<MyNavBar
				buttonOne="Home"
				buttonTwo="About"
				buttonThree="Services"
				buttonFour="Contact"
			/>
		</div>
	);
};

export default Home;
