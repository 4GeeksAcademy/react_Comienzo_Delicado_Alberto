import React from "react";

const Jumbotron = () => {
    return (
        <div className="container mt-4">
            <div className="p-5 bg-light rounded text-center">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                </p>
                <p>
                    It uses utility classes for typography and spacing to space content out within the larger container.
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Jumbotron;
