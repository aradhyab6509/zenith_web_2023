import React from "react";
import Box from '@mui/material/Box';


function Home3() {
  return (
    <section class="page-section" id="services">
            <Box class="row text-center">
                <Box class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa-brands fa-youtube fa-stack-2x text-primary"></i>
                    </span>
                    <h4 class="my-3">9 Sports</h4>
                    <p class="text-muted">Over 9 sports and games</p>
                </Box>
                <Box class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa-solid fa-calendar-days fa-stack-2x text-primary"></i>
                    </span>
                    <h4 class="my-3">7 Years</h4>
                    <p class="text-muted">7 years of successfull execution</p>
                </Box>
                <Box class="col-md-4">
                    <span class="fa-stack fa-4x">
                      <i class="fa-sharp fa-solid fa-award fa-stack-2x text-primary"></i>
                    </span>
                    <h4 class="my-3">445000 + Prize</h4>
                    <p class="text-muted">Prize worth 4.45L to be won</p>
                </Box>
            </Box>
    </section>
  );
}

export default Home3;
