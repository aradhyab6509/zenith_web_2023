import React from "react";
import Box from '@mui/material/Box';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


function ListOf4(data) {
  return (
    <Box className="col-lg-3 col-md-6">
    <Box className="team-member">
    <div className="team_card">
<div className="team_card-content">
  <div className="team_card-content-front">
      <img src={data.img} className="team_img_front" />
      <h4>{data.name}</h4>
  </div>
  <div className="team_card-content-back">
    <img src={data.img}  className="team_img_back" />
    <a className="social-icon__link" href={data.ig}>
        <InstagramIcon />
    </a>
    <a className="social-icon__link" href={data.mail}>
        <MailOutlinedIcon />
    </a>
    <a className="social-icon__link" href={data.phone}>
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
    <Box className="col-lg-4 col-md-6">
        <Box className="team-member">
        <div className="team_card">
    <div className="team_card-content">
      <div className="team_card-content-front">
          <img src={data.img} className="team_img_front" />
          <h4>{data.name}</h4>
      </div>
      <div className="team_card-content-back">
        <img src={data.img}  className="team_img_back" />
        <a className="social-icon__link" href={data.ig}>
            <InstagramIcon />
        </a>
        <a className="social-icon__link" href={data.mail}>
            <MailOutlinedIcon />
        </a>
        <a className="social-icon__link" href={data.phone}>
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
    <Box className="col-lg-6 col-md-6">
        <Box className="team-member">
        <div className="team_card">
    <div className="team_card-content">
      <div className="team_card-content-front">
          <img src={data.img} className="team_img_front" />
          <h4>{data.name}</h4>
      </div>
      <div className="team_card-content-back">
        <img src={data.img}  className="team_img_back" />
        <a className="social-icon__link" href={data.ig}>
            <InstagramIcon />
        </a>
        <a className="social-icon__link" href={data.mail}>
            <MailOutlinedIcon />
        </a>
        <a className="social-icon__link" href={data.phone}>
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
    <Box className="col-lg-12 col-md-12">
        <Box className="team-member">
        <div className="team_card">
    <div className="team_card-content">
      <div className="team_card-content-front">
          <img src={data.img} className="team_img_front" />
          <h4>{data.name}</h4>
          <p>{data.desi}</p>
      </div>
      <div className="team_card-content-back">
        <img src={data.img}  className="team_img_back" />
        <a className="social-icon__link" href={data.ig}>
            <InstagramIcon />
        </a>
        <a className="social-icon__link" href={data.mail}>
            <MailOutlinedIcon />
        </a>
        <a className="social-icon__link" href={data.phone}>
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
