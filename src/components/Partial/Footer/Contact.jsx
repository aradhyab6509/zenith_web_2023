import React from "react";
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
          <InstagramIcon />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="mailto:zenith@sggs.ac.in">
            <MailOutlinedIcon />
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="tel:+919404745344">
              <LocalPhoneOutlinedIcon />
            </a></li>
            <li class="social-icon__item"><a class="social-icon__link" href="https://goo.gl/maps/qdH2ab7UjYGfyPJs6">
                  <PlaceOutlinedIcon />
                </a></li>
    </ul>
    <p>&copy;{year} Zenith Web Team | All Rights Reserved</p>
    </footer>
  );
}

export default Contact;
