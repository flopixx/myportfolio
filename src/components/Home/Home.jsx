import React from "react";

import "./Home.css";

import Main from "../Main/Main";
import About from "../About/About";
import Skills from "../Skillss/Skills";
import Portfolios from "../Portfolio/Portfolios";
import Navbar from "../Navbar/Navbar";
import Contactme from "../Contactme/Contactme";

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Portfolios />
			<Contactme />
		</div>
	);
};

export default Home;
