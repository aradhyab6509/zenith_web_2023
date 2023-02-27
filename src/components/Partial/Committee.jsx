import React from "react";
import Box from '@mui/material/Box';
import * as Team_list from "./Team_list";
import * as Team from "../Team_data";
import Card from '@mui/material/Card';


//Heade
function Head() {
  return (
  <Card class="committee bg-dark">
  <Box class="row">
  {Team.Head.map((Team_data) => (
                  <Team_list.ListOf1
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                    desi={Team_data.desi} />
                  ))}
                  </Box></Card>
  );
}

// Joints
function Joints() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Student Joints</h1>
  </Box>
  <Box class="row">
  {Team.Student_joints.map((Team_data) => (
                  <Team_list.ListOf4
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

// Website Committee
function Web_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Website Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Website.map((Team_data) => (
                  <Team_list.ListOf4
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

// PRC Committee
function Prc_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">PRC Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Prc.map((Team_data) => (
                  <Team_list.ListOf4
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//Media Committee
function Media_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Media Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Media.map((Team_data) => (
                  <Team_list.ListOf2
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//Decoration Committee
function Decoration_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Decoration Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Decoration.map((Team_data) => (
                  <Team_list.ListOf3
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//GnS Committee
function GnS_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Ground & Site Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.GnS.map((Team_data) => (
                  <Team_list.ListOf3
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//FnS Committee
function FnS_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Food & Site Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.FnS.map((Team_data) => (
                  <Team_list.ListOf2
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//Sponsorship Committee
function Sponsorship_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Sponsorship Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Sponsorship.map((Team_data) => (
                  <Team_list.ListOf2
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}

//Finance Committee
function Finance_team() {
  return (
  <Card class="committee bg-dark">
  <Box class="col-12 text-center">
  <h1 class="designation">Finance Main Coordinator</h1>
  </Box>
  <Box class="row">
  {Team.Finance.map((Team_data) => (
                  <Team_list.ListOf2
                    key={Team_data.id}
                    img={Team_data.img}
                    name={Team_data.Name}
                      />
                  ))}
                  </Box></Card>
  );
}


export {Head};
export {Joints};
export {Web_team};
export {Prc_team};
export {Media_team};
export {Decoration_team};
export {GnS_team};
export {FnS_team};
export {Sponsorship_team};
export {Finance_team};
