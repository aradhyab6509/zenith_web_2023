import React from "react";
import Home from "./Home";
import Home1 from "./Partial/Home1";
import Box from '@mui/material/Box';




function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <Box class="container">
            <a class="navbar-brand logo" href="#page-top"><span>Zenith'23</span></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <Box class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/Events">Events</a></li>
                    <li class="nav-item"><a class="nav-link" href="/Team">Our Team</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                    <li class="nav-item"><a class="nav-link btn btn-outline-warning" role="button" href="/Register">Register</a></li>
                </ul>
            </Box>
        </Box>
    </nav>

  );
}

export default Header;
