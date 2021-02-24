import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Navbar</Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link " to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>


                </ul>

            </div>
            <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
        </div>
    </nav>
    )
}

export default Navbar;