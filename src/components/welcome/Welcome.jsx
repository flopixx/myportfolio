import React from "react";
import Boton from "../Boton/Boton";
import Animacion from "./Animacion";

const Welcome = () => {
	return (
		<>
			<Animacion />

			<div>
				<Boton mensaje='Entrar' />
			</div>
		</>
	);
};

export default Welcome;
