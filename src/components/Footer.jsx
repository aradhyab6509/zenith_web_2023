import React from "react";
import Box from '@mui/material/Box';


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer py-4">
        <Box class="container">
          <Box class="row align-items-center">
                <Box class="col-lg-4 text-lg-start">Copyright &copy {year}</Box>
                <Box class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </Box>
                <Box class="col-lg-4 text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </Box>
            </Box>
        </Box>
    </footer>
  );
}

export default Footer;
