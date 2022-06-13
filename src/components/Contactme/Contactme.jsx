import React from "react";
import "./Contactme.css";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contactme = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		console.log(e);
		// response to me
		emailjs
			.sendForm(
				"service_9qi5et8",
				"template_dy4afww",
				e.target,
				"KWvDtr-NSvvo937HK"
			)

			.then(
				(result) => {
					console.log(result.text);
					Swal.fire({
						title: "Mensaje enviado!",
						icon: "success",
						confirmButtonText: "OK",
						confirmButtonColor: "green",
					});
				},
				(error) => {
					console.log(error.text);
					Swal.fire({
						title: "Mensaje no enviado!",
						icon: "error",
						confirmButtonText: "OK",
						confirmButtonColor: "green",
					});
				}
			);

		// response to user
		emailjs
			.sendForm(
				"service_9qi5et8",
				"template_dy4afww",
				e.target,
				"KWvDtr-NSvvo937HK"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<>
			<div className='content-contact' id='contactme'>
				<div className='container-contact' data-aos='zoom-in-up'>
					<h3 className='contactme-title'>¿Hablamos?</h3>
					<p className='contactme-descripcion'>
						Si queres hablar sobre desarrollo web, darme feedback sobre mis
						proyectos o simplemente decir "Hola!" <h4>😊</h4> podes escribirme a
						través de mi Linkedln. Además, estoy buscando mi primera oportunidad
						laboral como desarrolladora frontend 👩🏻‍💻 Asi que si crees que mi
						perfil puede encajar con lo que buscas, no dudes en ponerte en
						contacto conmigo. Gracias y hasta pronto!
					</p>

					<section className='contact section'>
						<h3 className='section__title'>Contacto</h3>

						<div className='contact__container container '>
							<div>
								<div className='contact__information'>
									<AiOutlinePhone className='contact__icon' />

									<div>
										<h3 className='contact__title'>Celular</h3>
										<h4 className='contact__subtitle'>(011)35573479</h4>
									</div>
								</div>

								<div className='contact__information'>
									<AiOutlineMail className='contact__icon' />

									<div>
										<h3 className='contact__title'>Correo</h3>
										<h4 className='contact__subtitle'>flor.vel96@gmail.com</h4>
									</div>
								</div>

								<div className='contact__information'>
									<SiGooglemaps className='contact__icon' />

									<div>
										<h3 className='contact__title'>Ubicación</h3>
										<h4 className='contact__subtitle'>
											Buenos Aires, Argentina
										</h4>
									</div>
								</div>

								<form className='contact__form' onSubmit={sendEmail}>
									<label for='' className='contact__label'>
										Nombre
									</label>
									<input type='text' name='name' className='contact__input' />

									<label for='' className='contact__label'>
										Correo
									</label>
									<input type='email' name='email' className='contact__input' />

									<label for='' className='contact__label'>
										Mensaje
									</label>
									<textarea required name='usermessage' />

									<div>
										<button
											type='submit'
											name='btnSubmit'
											className='button_contact'
										>
											Enviar
										</button>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
				<div className='btn-up' onClick={() => scroll.scrollToTop()}>
					<i class='fas fa-arrow-up'></i>
				</div>
				<div className='linea-contact'></div>
			</div>
		</>
	);
};

export default Contactme;
