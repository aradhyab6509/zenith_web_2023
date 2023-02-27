import React from "react";
import Events_data from "./Events_data";
import Events_list from "./Partial/Events_List";
import Box from '@mui/material/Box';




function Events() {

  return (
    <Box class="bg-dark">
    <Box class="demo">
    <Box class="text-center">
        <h2 class="events_team_heading text-uppercase">Events</h2>
    </Box>
    </Box>
    <Box class="container">

    <Box class="row">
    {Events_data.map((Events_data) => (
                    <Events_list
                      key={Events_data.id}
                      img={Events_data.img}
                      name={Events_data.Name}
                      price={Events_data.price} />
                    ))}
    </Box>
    </Box>
    </Box>
  );
}


export default Events;
