import React from "react";
import Box from '@mui/material/Box';




function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <Box className="container">
            <a className="navbar-brand logo" href="#page-top"><span>Zenith'23</span></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fas fa-bars ms-1"></i>

            </button>
            <Box className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link" href="/zenith_web_2023">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/zenith_web_2023/Events">Events</a></li>
                    <li className="nav-item"><a className="nav-link" href="/zenith_web_2023/Team">Our Team</a></li>
                    <li className="nav-item"><a className="btn btn-outline-warning text-uppercase" href="/zenith_web_2023/Register">Register</a></li>
                </ul>
            </Box>
        </Box>
    </nav>

  );
}

export default Header;
