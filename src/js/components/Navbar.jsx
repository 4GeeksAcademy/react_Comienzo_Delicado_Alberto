import React from "react";
const Navbar = () => {
	return (
		<div className= ""> 
			<nav className="navbar navbar-expand-lg text-white bg-dark">
				<div className="container-fluid">
                    <p><strong>Bootstrap</strong></p>
					<div className="justify-content-end">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
						<a className="nav-link active text-white" aria-current="page" href="#">About</a>
						</li>
						<li className="nav-item">
						<a className="nav-link active text-white" aria-current="page" href="#">Service</a>
						</li>
						<li className="nav-item">
						<a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
						</li>
					</ul>
					</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;