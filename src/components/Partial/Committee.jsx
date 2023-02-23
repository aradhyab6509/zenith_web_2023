import React from "react";
import Box from '@mui/material/Box';
import * as Team_list from "./Team_list";
import * as Team from "../Team_data";
import Card from '@mui/material/Card';

// Joints
function Joints() {
  return (
  <Card >
  <Box class="col-12 text-center">
  <h1>Student Joints</h1>
  </Box>
  <Box class="row bg-light">
  {Team.Student_joints.map((Team_data) => (
                  <Team_list.ListOf4
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                    desi={Team_data.desi} />
                  ))}
                  </Box></Card>
  );
}

// Website Committee
function Web_team() {
  return (
  <Card >
  <Box class="col-12 text-center">
  <h1>Website Main Coordinator</h1>
  </Box>
  <Box class="row bg-light">
  {Team.Website.map((Team_data) => (
                  <Team_list.ListOf4
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                    desi={Team_data.desi} />
                  ))}
                  </Box></Card>
  );
}

// PRC Committee
function Prc_team() {
  return (
  <Card >
  <Box class="col-12 text-center">
  <h1>PRC Main Coordinator</h1>
  </Box>
  <Box class="row bg-light">
  {Team.Prc.map((Team_data) => (
                  <Team_list.ListOf3
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                    desi={Team_data.desi} />
                  ))}
                  </Box></Card>
  );
}


export {Joints};
export {Web_team};
export {Prc_team};
