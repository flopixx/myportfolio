import React, { useEffect, useRef } from "react";
import "./Main.css";
import flor from "../img/flor.png";
import { init } from "ityped";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Main = () => {
	const text = useRef();
	useEffect(() => {
		init(text.current, {
			showCursor: false,
			backDelay: 2000,
			strings: ["Frontend", "Developer "],
		});
	}, []);

	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 1000,
			easing: "ease",
		});
	}, []);
	return (
		<main>
			<div className='main__first' id='home'>
				<div className='main__container'>
					<div data-aos='fade-left'>
						<img src={flor} alt='' className='flor' />
						<div className='main__hello'>
							<h1 className='main__title'>Hi! I'M FLORENCIA </h1>
							<h2 ref={text}></h2>
						</div>
					</div>
					<div className='main__container__icons' data-aos='zoom-in-up'>
						<Link
							to='contactme'
							smooth={true}
							duration={1000}
							className='main__contactme'
						>
							Contact Me
						</Link>
						<div className='main__icons'>
							<a
								href='https://www.linkedin.com/in/florencia-velazquez-0121951b7/'
								target='_blank'
								rel='noreferrer'
							>
								{" "}
								<i className='fab fa-linkedin'></i>
							</a>
							<a
								href='https://github.com/flopixx'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
