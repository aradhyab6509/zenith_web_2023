import React from "react";
import Box from '@mui/material/Box';

// import Guest_detail from "./Guest_detail";

// href={Guest_detail(props.name)}

function Guest_Entry(props) {
  return (
    <Box class="col-lg-4 col-sm-6">
    <Box class="portfolio-item">
        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
            <img class="img-fluid" src={props.img} alt="..." />
        </a>
        <Box class="portfolio-caption">
            <Box class="portfolio-caption-heading">Window</Box>
            <Box class="portfolio-caption-subheading text-muted">Photography</Box>
        </Box>
    </Box>
    </Box>
  );
}

export default Guest_Entry;
