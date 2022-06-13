import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = ({ image, title, description, repo, link }) => {
	return (
		<div className='portfolio__container'>
			<div>
				<div className='portfolio__overlay'>
					<img src={image} alt='' className='portfolio__image' />
					<div className='overlay'>
						<button className='portfolio__btn'>
							<a href={repo} target='_blank' rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
							Repo
						</button>
						<button className='portfolio__btn'>
							<a href={link} target='_blank' rel='noreferrer'>
								<i class='far fa-eye'></i>
							</a>
							Demo
						</button>
					</div>
				</div>

				<div className='portfolio__description'>
					<h2 className='portfolio__subtitle'>{title}</h2>
					<p className='portfolio__description'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
