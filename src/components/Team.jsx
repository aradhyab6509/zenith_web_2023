import React from "react";

import * as Committee from "./Partial/Committee";
import Box from '@mui/material/Box';



function Team() {
  return(
    <Box id="team">
    <Box class="bg-dark demo">
    <Box class="text-center">
        <h2 class="events_team_heading text-uppercase">Our Amazing Team</h2>
    </Box>
    </Box>
      <Box class="container">
      <Box class="row">
          <Box class="col-lg-12">
              <Box class="team-member">
                  <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                  <h4>Prathiksha Narwade</h4>
                  <p class="text-muted">Zenith'23 Main Coordinator</p>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
              </Box>
          </Box>
          </Box>
            <Box class="">
            <Committee.Joints />
            </Box>

            <Box class="">
            <Committee.Web_team />
            </Box>

            <Box class="">
            <Committee.Prc_team />
            </Box>


  </Box>
</Box>
  );
}

export default Team;
