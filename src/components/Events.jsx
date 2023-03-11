import React from "react";
import Events_data from "./Events_data";
import Events_list from "./Partial/Events_List";
import Box from '@mui/material/Box';




function Events() {

  return (
    <Box className="bg-dark">
    <Box className="demo">
    <Box className="text-center">
        <h2 className="events_team_heading text-uppercase">Events</h2>
    </Box>
    </Box>
    <Box className="container">

    <Box className=" event_main">
    {Events_data.map((Events_data) => (
                    <Events_list
                      key={Events_data.id}
                      img={Events_data.img}
                      image={Events_data.image}
                      name={Events_data.Name}
                      Price1={Events_data.Price1}
                      Price2={Events_data.Price2}
                      rules={Events_data.rules}
                      note={Events_data.note}
                      Contact={Events_data.Contact}/>
                    ))}
    </Box>
    </Box>
    </Box>
  );
}


export default Events;
