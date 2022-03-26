import React from "react";

const Navbar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className=" justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><span className="navbar-brand mb-0 h1" style={{ color: "#5c7472" }}>E-commerce</span></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="topnav-right">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link active " aria-current="page" href="/"  ><strong>Product</strong> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"  >
                                            <strong>Total Product </strong> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/cart" ><strong>Cart </strong> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;