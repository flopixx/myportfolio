import React from "react";
import "./Skills.css";
import html from "../img/html5-original.svg";
import css from "../img/css3-original.svg";
import js from "../img/javascript-original.svg";
import react from "../img/react-original.svg";
import boo from "../img/bootstrap-pla.svg";
import git from "../img/git-scm-icon.svg";
import sass from "../img/sass-original.svg";

const Skills = () => {
	return (
		<>
			<h3 className='skills__title'>Skills</h3>
			<section className='skills__container' id='skills'>
				<div className='skills__icons' data-aos='zoom-in-up'>
					<img src={html} alt='html' className='icons__skill' />
					<img src={css} alt='css' className='icons__skill' />
					<img src={js} alt='javascript' className='icons__skill' />
					<img src={react} alt='react' className='icons__skill' />
					<img src={boo} alt='boostrap' className='icons__skill' />
					<img src={git} alt='git' className='icons__skill' />
					<img src={sass} alt='sass' className='icons__skill' />
				</div>
			</section>
		</>
	);
};

export default Skills;
