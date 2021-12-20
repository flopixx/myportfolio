import React, { useState } from "react";

import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
	const [isOpen, setopen] = useState(false);

	const handleclick = () => {
		setopen(!isOpen);
	};
	return (
		<header>
			<div className='navegation'>
				<Link to='/Homecarts'></Link>
				<div className='menu' onClick={handleclick}>
					<div>&#9776;</div>
				</div>
				<div className={isOpen ? "circleopen" : "circle"}>
					<div className='content-nav'>
						<Link
							to='Home'
							smooth={true}
							duration={1000}
							className='navlist wavy'
						>
							Home
						</Link>
						<Link
							to='about'
							smooth={true}
							duration={1000}
							className='navlist wavy'
						>
							About
						</Link>

						<Link
							to='skills'
							smooth={true}
							duration={1000}
							className='navlist wavy'
						>
							Skills
						</Link>
						<Link
							to='portfolios'
							smooth={true}
							duration={1000}
							className='navlist wavy'
						>
							Portfolio
						</Link>
						<Link
							to='contactme'
							smooth={true}
							duration={1000}
							className='navlist wavy'
						>
							Contactme
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
