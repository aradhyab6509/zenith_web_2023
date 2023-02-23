import React from "react";
import Box from '@mui/material/Box';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Contact() {
  return (
    <Box>
      <h3>Contact Us</h3>
      <Box>
      <span><PlaceOutlinedIcon color="disabled"/></span>
      <a href="https://goo.gl/maps/bqcRH6s1PbT3k4zG6">SGGSIE&T, Nanded -431606</a>
      </Box>
      <Box>
      <span><MailOutlinedIcon color="disabled"/></span>
      <a class="" href="mailto:zenith@sggs.ac.in">zenith@sggs.ac.in</a>
      </Box>
      <Box>
      <span><LocalPhoneOutlinedIcon color="disabled"/></span>
      <a href="tel:+919404745344">9404745344</a>
      </Box>
    </Box>
  );
}

export default Contact;
