import React from "react";
import "./Boton.css";
import { Link } from "react-router-dom";

const Boton = ({ mensaje }) => {
	return (
		<div className='boton-welcome'>
			<Link to='/home'>
				<button className='btn animate__animated animate__bounce'>
					{mensaje}
				</button>
			</Link>
		</div>
	);
};

export default Boton;
