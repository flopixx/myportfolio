import React from "react";
import "./welcome.css";
import Lottie from "react-lottie";
import singinAnimate from "./Welcomee.json";
import "./welcome.css";

const Animacion = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: singinAnimate,
	};
	return (
		<div className='anim-container pt-80'>
			<Lottie options={defaultOptions} className='anim' />
		</div>
	);
};

export default Animacion;
