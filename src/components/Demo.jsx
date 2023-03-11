import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Register from "./Register";
import Footer from "./Footer";
import Box from '@mui/material/Box';
import NotFound from "./Partial/notFound";


function Demo() {
  const [loading, setLoading] = useState(true);
const spinner = document.getElementById("spinner");
if (spinner) {
  setTimeout(() => {
    spinner.style.display = "none";
    setLoading(false);
  }, 2000);
}


  return (
    !loading && (
    <Box>
      <Router>
      <Header />
            <Routes>
              <Route path="/zenith_web_2023" element={<Home />} />
              <Route path="/zenith_web_2023/Events" element={<Events />} />
              <Route path="/zenith_web_2023/Team" element={<Team />} />
              <Route path="/zenith_web_2023/Register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
    </Box>
  )


  );
}

export default Demo;
