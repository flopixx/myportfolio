import React from "react";
import "./Skills.css";
import html from "../img/html5-original.svg";
import css from "../img/css3-original.svg";
import js from "../img/javascript-original.svg";
import reactt from "../img/react-original.svg";
import boo from "../img/bootstrap-pla.svg";
import git from "../img/git-scm-icon.svg";
import sass from "../img/sass-original.svg";

const Skills = () => {
	return (
		<>
			<h3 className='skills-title'>Skills</h3>
			<section className='skills containeer'>
				<div className='skills-icons' data-aos='zoom-in-up'>
					<img src={html} alt='' className='icons-skill' />
					<img src={css} alt='' className='icons-skill' />
					<img src={js} alt='' className='icons-skill' />
					<img src={reactt} alt='' className='icons-skill' />
					<img src={boo} alt='' className='icons-skill' />
					<img src={git} alt='' className='icons-skill' />
					<img src={sass} alt='' className='icons-skill' />
				</div>
			</section>
		</>
	);
};

export default Skills;
