import React from "react";
import Box from '@mui/material/Box';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

function Home1() {
  return (
    <header className="masthead">
    <Box className="coverpage-text">
    <Box className="masthead-heading">
      <img className="Zenith_img" src="../assets/img/Zenith.png" />
      <h3>1<sup>st</sup>, 2<sup>nd</sup> & 3<sup>rd</sup> of April'23</h3>
        <a className="btn btn-warning text-uppercase coverpage-btn" href="../assets/img/Brochure.pdf" download="Brochure.pdf">View Brochure</a>
    </Box>
    <a className="btn btn-outline-warning btn-xl text-uppercase coverpage-btn" href="#home2"><KeyboardDoubleArrowDownOutlinedIcon fontSize="large"/></a>
    </Box>
    </header>
  );
}

export default Home1;
