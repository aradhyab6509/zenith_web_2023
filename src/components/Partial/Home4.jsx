
import React from "react";
import Guest_Entry from "./Guest_Entry";
import Guest from "../Guest";
import Box from '@mui/material/Box';




function Home4() {


  return (

    <section class="page-section bg-light" id="portfolio">
        <Box class="container">
            <Box class="text-center">
                <h2 class="section-heading text-uppercase">Portfolio</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </Box>
            <Box class="row">

                {Guest.map((Guest_list) => (
                                <Guest_Entry
                                  id={Guest_list.id}
                                  key={Guest_list.id}
                                  img={Guest_list.img}
                                  emoji={Guest_list.emoji}
                                  name={Guest_list.name}
                                  description={Guest_list.meaning}
                                />
        ))}
        </Box>
        </Box>
        </section>
  );
}

export default Home4;
