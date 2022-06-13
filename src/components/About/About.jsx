import React from "react";
import "./About.css";
import about from "../img/flor-img.jpeg";

const About = () => {
	return (
		<section className='about__container' data-aos='fade-up' id='about'>
			<h3 className='about__title'>About Me</h3>
			<div className='about__image'>
				<img src={about} alt='' className='about__imageflor' />
				<div>
					<div className='about__me'>
						<p className='about__paragraf'>
							Hola! Vivo en Buenos Aires,Argentina ,soy una persona
							curiosa,ordenada,autodidacta. Por mi curiosidad descubrí la
							programación y cómo se hacen las páginas web algo que creía
							imposible aprender e investigando me di cuenta que no era difícil
							, y desde entonces decidí un nuevo camino para mi vida:el
							desarrollo web ,me di cuenta que esto es lo que me gusta hacer y
							disfruto mucho. En 2020,y con el comienzo de la pandemia,empecé a
							realizar cursos dedicados a programación especialmente el frontend
							y backend. Descubrí en este último una gran pasión,ya que podía
							dedicar horas al estudio del mismo. Comencé realizando proyectos
							en mis tiempos libres algo que con los días se hizo un hobby.
							Siempre me encuentro dedicada en el aprendizaje de nuevas
							tecnologías para crear proyectos y interesada en encarar desafíos
							y trabajar en equipo. Mis objetivos son dedicarme al área del
							stack Mern , seguir formándome y poder crecer profesionalmente.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
