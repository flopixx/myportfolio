import React, { useState } from "react";

import { Link } from "react-scroll";

import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
	const [isOpen, setopen] = useState(false);

	const handleclick = () => {
		setopen(!isOpen);
	};
	return (
		<header>
			<div className='navbar__navegation'>
				<Link to='/Homecarts'></Link>
				<div className='navbar__menu' onClick={handleclick}>
					<BiMenuAltRight className='navbar__icon' />
				</div>
				<div className={isOpen ? "circleopen" : "circle"}>
					<div className='navbar__container'>
						<Link
							to='Home'
							smooth={true}
							duration={1000}
							className='navbar__links wavy'
						>
							Home
						</Link>
						<Link
							to='about'
							smooth={true}
							duration={1000}
							className='navbar__links wavy'
						>
							About
						</Link>

						<Link
							to='skills'
							smooth={true}
							duration={1000}
							className='navbar__links wavy'
						>
							Skills
						</Link>
						<Link
							to='portfolios'
							smooth={true}
							duration={1000}
							className='navbar__links wavy'
						>
							Portfolio
						</Link>
						<Link
							to='contactme'
							smooth={true}
							duration={1000}
							className='navbar__links wavy'
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
