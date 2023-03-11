import React from "react";
import Box from '@mui/material/Box';


function Home3() {
  return (
    <section className="page-section" id="services">
            <Box className="row text-center">
                <Box className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa-brands fa-youtube fa-stack-2x text-primary"></i>
                    </span>
                    <h4 className="my-3">7 Sports</h4>
                    <p className="text-muted">Over 7 sports and games</p>
                </Box>
                <Box className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa-solid fa-calendar-days fa-stack-2x text-primary"></i>
                    </span>
                    <h4 className="my-3">7 Years</h4>
                    <p className="text-muted">7 years of successfull execution</p>
                </Box>
                <Box className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa-sharp fa-solid fa-award fa-stack-2x text-primary"></i>
                    </span>
                    <h4 className="my-3">445000 + Prize</h4>
                    <p className="text-muted">Prize worth 4.45L to be won</p>
                </Box>
            </Box>
    </section>
  );
}

export default Home3;
