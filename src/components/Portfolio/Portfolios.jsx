import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Portfolio.css";
import proyect1 from "../portfolio-imgs/Base-Apparel.png";
import proyect2 from "../portfolio-imgs/Document.png";
import proyect3 from "../portfolio-imgs/devchallenges-io.png";
import proyect4 from "../portfolio-imgs/Document-1.png";
import proyect5 from "../portfolio-imgs/Modern-Interior.png";
import proyect6 from "../portfolio-imgs/form.png";
import proyect7 from "../portfolio-imgs/Canal.png";
import proyect9 from "../portfolio-imgs/gifos.png";
import proyect10 from "../portfolio-imgs/Alkemy-challenge.png";
import proyect11 from "../portfolio-imgs/The-movie.png";
import proyect12 from "../portfolio-imgs/Easybank.png";
import proyect13 from "../portfolio-imgs/Breaking-bad.png";
import proyect14 from "../portfolio-imgs/Administrador-de-Pacientes.png";
import proyect15 from "../portfolio-imgs/Sakura-clear.png";

const Portfolios = () => {
	return (
		<>
			<h3 className='portfolios__title'>Portfolio</h3>
			<section
				className='porfolios__section'
				data-aos='zoom-in-up'
				id='portfolios'
			>
				<div className='portfolios__container '>
					<Portfolio
						image={proyect1}
						title='Base Aparel'
						description='Proyecto de frontendmentor realizado con html5 y css3.'
						repo='https://github.com/flopixx/proyecto-frontend-mentor'
						link='https://practical-clarke-cc46c4.netlify.app/'
					/>
					<Portfolio
						image={proyect2}
						title='Powered by Technology'
						description='Proyecto de frontendmentor realizado con html5 y css3.'
						repo='https://github.com/flopixx/PROYECTO5'
						link='https://agitated-haibt-612de0.netlify.app/'
					/>
					<Portfolio
						image={proyect3}
						title='404 not found'
						description='Proyecto de devchallenge-io realizado con html5 y css3.'
						repo='https://github.com/flopixx/404-not-found'
						link='https://hopeful-leakey-e86411.netlify.app/'
					/>
					<Portfolio
						image={proyect4}
						title='Master Social'
						description='Proyecto de frontendmentor realizado con html5 y css3.'
						repo='https://github.com/flopixx/masstersocial'
						link='https://socialmasster.netlify.app/'
					/>
					<Portfolio
						image={proyect5}
						title='Modern Interior'
						description='Proyecto de devchallenge-io realizado con html5 y css3.'
						repo='https://github.com/flopixx/modern-interior'
						link='https://flamboyant-jennings-9b268f.netlify.app/'
					/>
					<Portfolio
						image={proyect6}
						title='Formulario basico'
						description='Proyecto de frontendmentor realizado con html5 y css3.'
						repo='https://github.com/flopixx/proyecto6'
						link='https://musing-swanson-0c45c9.netlify.app/'
					/>
					<Portfolio
						image={proyect7}
						title='CANAL DE PODCAST '
						description='El desaf??o est?? enfocado en el maquetado de la landing page de un canal de Podcast, siguiendo las gu??as visuales de una interfaz de usuario otorgada y desarrollando funcionalidades de reproducci??n de contenidos, navegaci??n, compatibilidad con m??ltiples exploradores y dispositivos, proyecto hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho Html5 y Css3.'
						repo='https://github.com/flopixx/flopixx.github.io-'
						link='https://canaldepodcasts.netlify.app/'
					/>

					<Portfolio
						image={proyect9}
						title='Gifos Acamica'
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web interactiva para compartir GIFs animados, poniendo en pr??ctica los fundamentos de la programaci??n y el uso de JavaScript mediante la obtenci??n de datos de la API de http://giphy.com/, trabajando con asincronismo y aprovechando herramientas nativas del explorador como la obtenci??n de im??genes a trav??s de la webcam, proyecto hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho js.'
						repo='https://github.com/flopixx/gifos-acamica/tree/master/gifOs-Acamica-main'
						link='https://gifos-acamicaa.netlify.app/'
					/>
					<Portfolio
						image={proyect10}
						title='Superheroes'
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web de superheroes echo con React js , poniendo en pr??ctica los fundamentos de la programaci??n y el uso de JavaScript mediante la obtenci??n de datos de la API de superheroes, trabajando con asincronismo , usando las librerias de bootstrap y tambien usando  la libreria Formik  para validar  el formulario, proyecto hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho React js.'
						repo='https://github.com/flopixx/Superheroes'
						link='https://superheroess.netlify.app/'
					/>
					<Portfolio
						image={proyect11}
						title='The movie db app '
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web de peliculas echo con React js , poniendo en pr??ctica los fundamentos de la programaci??n y el uso de JavaScript mediante la obtenci??n de datos de la API de the movie db, trabajando con asincronismo , utilizando styled-components para los estilos ,el proyecto  esta hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho React js.'
						repo='https://github.com/flopixx/ReactMovie'
						link='https://reactmoviee.netlify.app/'
					/>
					<Portfolio
						image={proyect12}
						title='Easybank'
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web de los challenges de  Frontendmentor echo con React js , poniendo en pr??ctica los fundamentos de la programaci??n y el uso de Html y Css, utilizando sass para los estilos ,el proyecto  esta hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho React js.'
						repo='https://github.com/flopixx/Easybanck'
						link='https://bankeasyy.netlify.app/'
					/>
					<Portfolio
						image={proyect13}
						title='Breaking bad app'
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web de Breaking bad  echo con React js , poniendo en pr??ctica los fundamentos de la programaci??n y el uso de Html y Css,utilizando la API publica de breaking bad  ,el proyecto  esta hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho React js.'
						repo='https://github.com/flopixx/breaking-bad-app'
						link='https://breakingbadsite.netlify.app/'
					/>
					<Portfolio
						image={proyect14}
						title='Administrador de pacientes'
						description='El desaf??o consiste en la creaci??n de una aplicaci??n web de un administrador de pacientes echo con React js , poniendo en pr??ctica los fundamentos de la programaci??n y el uso de Html y Css,donde se pueden  creaar turnos , eliminar y tambien se agrego localstorage para guardar los turnos ,el proyecto  esta hecho con amor, pero como el amor s??lo no alcanza, le puse un par de librer??as y por sobre todo mucho React js.'
						repo='https://github.com/flopixx/Administrador-de-pacientes'
						link='https://administradorpaci.netlify.app/'
					/>
					<Portfolio
						image={proyect15}
						title=' Cartas Clow de Sakura Card Captor '
						description='Proyecto realizado con React js styled-components y librerias Animate css para las animaciones ,se pueden ver las 53 cartas ,agregar a favoritos mediante localstorage y ver el detalle de cada carta, se agrego paginaci??n , darkmode y modal , se uso una API externa de Jesica velazquez.'
						repo='https://github.com/flopixx/Sakuraclearcard'
						link='https://sakura-clowcards.netlify.app/'
					/>
				</div>
			</section>
		</>
	);
};

export default Portfolios;
