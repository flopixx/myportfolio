import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = ({ image, title, description, repo, link }) => {
	return (
		<div className='portfolio-content'>
			<div className='content'>
				<img src={image} alt='' className='portfolio-img' />

				<div className='portfolio-description'>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className='portfolio-icons'>
					<div className='btn-portfolio'>
						<a href={repo} target='_blank' rel='noreferrer'>
							<i className='fab fa-github'></i>
						</a>
						Repo
					</div>
					<button className='btn-portfolio'>
						<a href='https://practical-clarke-cc46c4.netlify.app/'></a>
						<i class='far fa-eye'></i>
						Repo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
