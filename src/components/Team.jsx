import React from "react";

import * as Committee from "./Partial/Committee";
import Box from '@mui/material/Box';



function Team() {
  return(
    <Box id="team" className="bg-dark">
    <Box className="bg-dark demo">
    <Box className="text-center">
        <h2 className="events_team_heading text-uppercase">Our Amazing Team</h2>
    </Box>
    </Box>

      <Box className="container">
      <Box className="row">

          <Box className="">
          <Committee.Head />
          </Box>

            <Box className="">
            <Committee.Joints />
            </Box>

            <Box className="">
            <Committee.Web_team />
            </Box>

            <Box className="">
            <Committee.Prc_team />
            </Box>

            <Box className="">
            <Committee.GnS_team />
            </Box>

            <Box className="">
            <Committee.Media_team />
            </Box>

            <Box className="">
            <Committee.Decoration_team />
            </Box>

            <Box className="">
            <Committee.FnS_team />
            </Box>

            <Box className="">
            <Committee.Sponsorship_team />
            </Box>


            <Box className="">
            <Committee.Finance_team />
            </Box>


  </Box>
</Box>
</Box>
  );
}

export default Team;
