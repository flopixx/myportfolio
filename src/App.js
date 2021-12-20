import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skillss/Skills";
import Portfolios from "./components/Portfolio/Portfolios";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/portfolios' element={<Portfolios />} />
			</Routes>
		</Router>
	);
}

export default App;
