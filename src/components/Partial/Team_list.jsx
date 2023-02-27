import React from "react";
import Box from '@mui/material/Box';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


function ListOf4(data) {
  return (
    <Box class="col-lg-3 col-md-6">
    <Box class="team-member">
    <div class="team_card">
<div class="team_card-content">
  <div class="team_card-content-front">
      <img src="assets/img/team/3.jpg" class="team_img_front" />
      <h4>{data.name}</h4>
  </div>
  <div class="team_card-content-back">
    <img src="assets/img/team/3.jpg"  class="team_img_back" />
    <a class="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
        <InstagramIcon />
    </a>
    <a class="social-icon__link" href="mailto:zenith@sggs.ac.in">
        <MailOutlinedIcon />
    </a>
    <a class="social-icon__link" href="tel:+919404745344">
        <LocalPhoneOutlinedIcon />
    </a>
  </div>
</div>
</div>
    </Box>
    </Box>
  );
}

function ListOf3(data) {
  return (
    <Box class="col-lg-4 col-md-6">
        <Box class="team-member">
        <div class="team_card">
    <div class="team_card-content">
      <div class="team_card-content-front">
          <img src="assets/img/team/3.jpg" class="team_img_front" />
          <h4>{data.name}</h4>
      </div>
      <div class="team_card-content-back">
        <img src="assets/img/team/3.jpg"  class="team_img_back" />
        <a class="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
            <InstagramIcon />
        </a>
        <a class="social-icon__link" href="mailto:zenith@sggs.ac.in">
            <MailOutlinedIcon />
        </a>
        <a class="social-icon__link" href="tel:+919404745344">
            <LocalPhoneOutlinedIcon />
        </a>

      </div>
    </div>
    </div>
        </Box>
    </Box>
  );
}

function ListOf2(data) {
  return (
    <Box class="col-lg-6 col-md-6">
        <Box class="team-member">
        <div class="team_card">
    <div class="team_card-content">
      <div class="team_card-content-front">
          <img src="assets/img/team/3.jpg" class="team_img_front" />
          <h4>{data.name}</h4>
      </div>
      <div class="team_card-content-back">
        <img src="assets/img/team/3.jpg"  class="team_img_back" />
        <a class="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
            <InstagramIcon />
        </a>
        <a class="social-icon__link" href="mailto:zenith@sggs.ac.in">
            <MailOutlinedIcon />
        </a>
        <a class="social-icon__link" href="tel:+919404745344">
            <LocalPhoneOutlinedIcon />
        </a>

      </div>
    </div>
    </div>
        </Box>
    </Box>
  );
}

function ListOf1(data) {
  return (
    <Box class="col-lg-12 col-md-12">
        <Box class="team-member">
        <div class="team_card">
    <div class="team_card-content">
      <div class="team_card-content-front">
          <img src="assets/img/team/3.jpg" class="team_img_front" />
          <h4>{data.name}</h4>
          <p>{data.desi}</p>
      </div>
      <div class="team_card-content-back">
        <img src="assets/img/team/3.jpg"  class="team_img_back" />
        <a class="social-icon__link" href="https://instagram.com/zenith_sggs?igshid=YmMyMTA2M2Y=">
            <InstagramIcon />
        </a>
        <a class="social-icon__link" href="mailto:zenith@sggs.ac.in">
            <MailOutlinedIcon />
        </a>
        <a class="social-icon__link" href="tel:+919404745344">
            <LocalPhoneOutlinedIcon />
        </a>

      </div>
    </div>
    </div>
        </Box>
    </Box>
  );
}

export {ListOf4};
export {ListOf3};
export {ListOf2};
export {ListOf1};
