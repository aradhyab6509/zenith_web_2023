import React from "react";

import * as Committee from "./Partial/Committee";
import Box from '@mui/material/Box';



function Team() {
  return(
    <Box id="team" class="bg-dark">
    <Box class="bg-dark demo">
    <Box class="text-center">
        <h2 class="events_team_heading text-uppercase">Our Amazing Team</h2>
    </Box>
    </Box>

      <Box class="container">
      <Box class="row">

          <Box class="">
          <Committee.Head />
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

            <Box class="">
            <Committee.Decoration_team />
            </Box>

            <Box class="">
            <Committee.GnS_team />
            </Box>

            <Box class="">
            <Committee.Media_team />
            </Box>

            <Box class="">
            <Committee.FnS_team />
            </Box>

            <Box class="">
            <Committee.Sponsorship_team />
            </Box>

            <Box class="">
            <Committee.Finance_team />
            </Box>


  </Box>
</Box>
</Box>
  );
}

export default Team;
