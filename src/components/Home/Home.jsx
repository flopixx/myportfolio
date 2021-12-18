import React from "react";
import Header from "../Header/Header";
import "./Home.css";

import Main from "../Main/Main";
import About from "../About/About";
import Skills from "../Skillss/Skills";
import Portfolios from "../Portfolio/Portfolios";

const Home = () => {
	return (
		<div className='bodyy'>
			<Header />
			<Main />
			<About />
			<Skills />
			<Portfolios />
		</div>
	);
};

export default Home;
