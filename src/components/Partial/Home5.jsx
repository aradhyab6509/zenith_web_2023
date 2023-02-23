import React from "react";
import Box from '@mui/material/Box';


function Home5() {
  return (
    <section class="page-section bg-dark" id="about2">
        <Box class="container">
            <Box class="text-center">
                <h2 class="section-heading text-white">About</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </Box>
            <ul class="timeline">
                <li>
                    <Box class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></Box>
                    <Box class="timeline-panel">
                        <Box class="timeline-heading text-white">
                            <h4>2009-2011</h4>
                            <h4 class="subheading">Our Humble Beginnings</h4>
                        </Box>
                        <Box class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></Box>
                    </Box>
                </li>
                <li class="timeline-inverted">
                    <Box class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></Box>
                    <Box class="timeline-panel">
                        <Box class="timeline-heading text-white">
                            <h4>March 2011</h4>
                            <h4 class="subheading">An Agency is Born</h4>
                        </Box>
                        <Box class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></Box>
                    </Box>
                </li>
                <li>
                    <Box class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></Box>
                    <Box class="timeline-panel">
                        <Box class="timeline-heading text-white">
                            <h4>December 2015</h4>
                            <h4 class="subheading">Transition to Full Service</h4>
                        </Box>
                        <Box class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></Box>
                    </Box>
                </li>
                <li class="timeline-inverted">
                    <Box class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></Box>
                    <Box class="timeline-panel">
                        <Box class="timeline-heading text-white">
                            <h4>July 2020</h4>
                            <h4 class="subheading">Phase Two Expansion</h4>
                        </Box>
                        <Box class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></Box>
                    </Box>
                </li>
                <li class="timeline-inverted">
                    <Box class="timeline-image">
                        <h4>
                            Be Part
                            <br />
                            Of Our
                            <br />
                            Story!
                        </h4>
                    </Box>
                </li>
            </ul>
        </Box>
    </section>
  );
}

export default Home5;
