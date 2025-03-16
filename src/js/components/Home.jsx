import React from "react";
import Navbar from "../components/Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

//create your first component
const Home = () => {
	return (
		<div className="">
			<div className="">
				<Navbar />
			</div>	
			<div className="">
				<Jumbotron />
			</div>
			<div className="d-flex justify-content-center gap-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;