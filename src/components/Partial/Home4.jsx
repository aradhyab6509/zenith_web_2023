
import React from "react";
import Guest_Entry from "./Guest_Entry";
import Guest from "../Guest";
import Box from '@mui/material/Box';




function Home4() {

  return (

    <Box className="page-section guest_main">
    <Box className="text-center">
        <h2 className="section-heading text-white">Our Guest</h2>
    </Box>
    <Box className="guest_container">
      {Guest.map((Guest_data) => (
                    <Guest_Entry
                      key={Guest_data.id}
                      img={Guest_data.img}
                      name={Guest_data.name}
                      desi={Guest_data.desi}
                      year={Guest_data.year}
                       />
                    ))}
    </Box>
  </Box>
  );
}

export default Home4;
