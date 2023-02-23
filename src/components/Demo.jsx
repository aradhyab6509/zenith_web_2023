import React from "react";
import Header from "./Header";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Register from "./Register";
import Footer from "./Footer";
import Box from '@mui/material/Box';



function Demo() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/Events":
      Component = Events;
      break;
      case "/Team":
        Component = Team;
        break;
      case "/Register":
          Component = Register;
          break;
  }
  return (
    <Box>
      <Header />
      <Component />
      <Footer />
    </Box>




  );
}

export default Demo;
