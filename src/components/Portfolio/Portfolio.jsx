import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = ({ image, title, description, repo, link }) => {
	return (
		<div className='portfolio-content'>
			<div className='content-portfolio'>
				<div className='portfolio-overlay'>
					<img src={image} alt='' className='portfolio-img' />
					<div className='overlay'>
						<button className='btn-portfolio'>
							<a href={repo} target='_blank' rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
							Repo
						</button>
						<button className='btn-portfolio'>
							<a href={link} target='_blank' rel='noreferrer'>
								<i class='far fa-eye'></i>
							</a>
							Demo
						</button>
					</div>
				</div>

				<div className='portfolio-description'>
					<h2 className='portfolio-tittle'>{title}</h2>
					<p className='description'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
