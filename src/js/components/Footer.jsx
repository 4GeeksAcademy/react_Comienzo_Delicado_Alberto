import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark text-white w-100">
                <p className="col-md-4 mb-0">&copy; 2022 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="bi bi-bootstrap" style={{ fontSize: "2rem" }}></i>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Home</a></li>
                    <li className="nav-item"><a href="javascript:void(0);" className="nav-link px-2 text-white">Features</a></li>
                    <li className="nav-item"><a href="javascript:void(0);" className="nav-link px-2 text-white">Pricing</a></li>
                    <li className="nav-item"><a href="javascript:void(0);" className="nav-link px-2 text-white">FAQs</a></li>
                    <li className="nav-item"><a href="javascript:void(0);" className="nav-link px-2 text-white">About</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
