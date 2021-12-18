import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
	const [isOpen, setopen] = useState(false);
	const handleclick = () => {
		setopen(!isOpen);
	};
	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<a href='#' className='nav-logo'>
					Flor <span>💖</span>
				</a>
				<div className={isOpen ? "open" : "nav-menu"}>
					<ul className='nav-list grid'>
						<Link to='home'>
							<li className='nav-item'>
								<i class='fas fa-house-user'></i> Home
							</li>
						</Link>
						<Link to='about'>
							<li className='nav-item'>
								{" "}
								<i class='far fa-user'></i>About Me
							</li>
						</Link>
						<Link to='skills'>
							<li className='nav-item'>
								<i class='far fa-file-alt'></i>Skills
							</li>
						</Link>
						<Link to='portfolio'>
							<li className='nav-item'>
								{" "}
								<i class='far fa-file-image'></i>Portfolio
							</li>
						</Link>
						<Link to='contact'>
							<li className='nav-item'>
								{" "}
								<i class='far fa-envelope'></i>Contact
							</li>
						</Link>
					</ul>
				</div>
				<div className='nav-toggle' onClick={handleclick}>
					<i class='fas fa-bars'></i>
				</div>
			</nav>
			<div className='linea'></div>
		</header>
	);
};

export default Header;
