import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Portfolio.css";
import proyect1 from "../portfolio-imgs/Base-Apparel.png";
import proyect2 from "../portfolio-imgs/Canal.png";

const Portfolios = () => {
	return (
		<section className='containerrr' data-aos='zoom-in-up'>
			<div className='portfolio gridd'>
				<Portfolio
					image={proyect1}
					title='Base Aparel'
					description='holalalala'
					repo='https://github.com/flopixx/proyecto-frontend-mentor'
				/>
				<Portfolio image={proyect2} />
				<Portfolio image={proyect2} />
			</div>
		</section>
	);
};

export default Portfolios;
