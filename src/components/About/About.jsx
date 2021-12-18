import React from "react";
import "./About.css";
import about from "../img/flor-img.jpeg";

const About = () => {
	return (
		<section className='about container' data-aos='fade-up'>
			<h3 className='about-title'>About Me</h3>
			<div className='about-img'>
				<img src={about} alt='' className='about-flor' />
				<div className='about'>
					<div className='aboutme'>
						<p className='about-paraf'>
							Hola me llamo Florencia Velazquez soy una persona constante,
							autodidacta y muy orientada al resultado. Descubrí la Programación
							gracias a un familiar y me encantó. Me guió para convertirme en
							desarrolladora FrontEnd y desde ahí comencé mi camino en
							Informática. Me encuentro en la búsqueda de una empresa que me
							permita aportar mis habilidades ,conocimientos y continuar
							aprendiendo para desarrollarme profesionalmente.
						</p>
						<button className='btn-neon'>
							<a
								href='../img/florenciavelazquez-cv.pdf'
								download
								target='_blank'
								rel='noreferrer'
							></a>
							Dowload cv
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
