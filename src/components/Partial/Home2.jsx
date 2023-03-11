import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less...";
    moreText.style.display = "inline";
  }
}

function Home2() {
  return (

    <Box className="container Home2 bg-dark text-center" id="home2">
      <h2 className="section-heading home2_h2 text-uppercase">Zenith'23</h2>
      <p className="text-muted">We bring you Zenith'23, the 8th edition of our college sports extravaganza with the conviction to go beyond Zenith'22. The Ignited spirits shall be unleashed and we shall "DEVOUR THE VICTORY". Last year we hosted this event in the heated month of April.<span id="dots">...</span><span id="more"> Best student athletes from across the state will converge to perspire and showcase their talents with competing for the title of being the best. With a wide variety of sports to choose from, basketball, football, volleyball, kabaddi etc,  there is something for everyone to enjoy. From the thrill of the basketball court to the intensity of the track and field, this is a competition you won't want to miss. Join us as we come together to celebrate the passion, dedication, and hard work of these exceptional young athletes. Get ready for an unforgettable experience filled with excitement, camaraderie, and the pure joy of competition. Prizes worth over 4.5 lakhs were awarded in the previous edition of ZENITH. Time to set your eyes of this years exciting prize pool.....get set goooo!!!</span></p>
      <a onClick={myFunction} id="myBtn" color="error">
        Read More...
      </a>
    </Box>

  );
}

export default Home2;
