import React from "react";
import Box from '@mui/material/Box';


function Map() {
  const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8903381014534!2d77.29024961482253!3d19.112466187067028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676662982519!5m2!1sen!2sin";

  return (

    <Box>
    <iframe
     src={url}
     width="100%"
     height="350"
     style={{ border: "0" }}
     allowFullScreen=""
     loading="lazy"></iframe>
    </Box>


  );
}

export default Map;
