import React from "react";
import "./Contactme.css";
import { animateScroll as scroll } from "react-scroll";

const Contactme = () => {
	return (
		<>
			<div className='content-contact' id='contactme'>
				<div className='container-contact' data-aos='zoom-in-up'>
					<h3 className='contactme-title'>¿Hablamos?</h3>
					<p className='contactme-descripcion'>
						Si quieres hablar sobre desarrollo web,darme feedback sobre mis
						proyectos o simplemente decir hola <h4>😉</h4>, puedes escribirme a
						través, de mi Linkedln. Además ,estoy buscando mi primera
						oportunidad laboral como desarrolladora frontend,asi si crees que mi
						perfil puede encajar con lo que buscas,no dudes en ponerte en
						contacto conmigo. Gracias y hasta pronto!
					</p>
					<div className='btn-contact'>
						<a className='btn-contactme' href='mailto:flor.vel96@gmail.com'>
							<i className='far fa-envelope'></i> Escríbeme
						</a>
					</div>
					<div className='btn-up' onClick={() => scroll.scrollToTop()}>
						<i class='fas fa-arrow-up'></i>
					</div>
				</div>
				<div className='linea-contact'></div>
			</div>
		</>
	);
};

export default Contactme;
