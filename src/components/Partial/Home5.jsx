import React from "react";
import Box from '@mui/material/Box';


function Home5() {
  return (
    <section className="page-section bg-dark" id="about2">
        <Box className="container">
            <Box className="text-center">
                <h2 className="section-heading text-white">MENTORS</h2>
                <br />
            </Box>
            <ul className="timeline">
                <li>
                    <Box className="timeline-image"><img className="rounded-circle img-fluid" src="zenith_web_2023/assets/img/Feedback/director.jpeg" alt="..." /></Box>
                    <Box className="timeline-panel">
                        <Box className="timeline-heading text-white">
                            <h4>Dr. Yashwant V. Joshi</h4>
                            <h5 className="subheading">Director, SGGSIE&T</h5>
                        </Box>
                        <Box className="timeline-body"><p className="text-muted">Greetings Athletes!! SGGS is a prestigious gov institute in Maharashtra and The state-level sports tournament Zenith has been a crown jewel of the institute since 2016. I send a warm welcome to all the sport enthusiasts in the State to participate in this Zealous and pumped up edition of Zenith.</p></Box>
                    </Box>
                </li>
                <li className="timeline-inverted">
                    <Box className="timeline-image"><img className="rounded-circle img-fluid" src="zenith_web_2023/assets/img/Feedback/dean.png" alt="..." /></Box>
                    <Box className="timeline-panel">
                        <Box className="timeline-heading text-white">
                            <h4>Dr. A. R. Patil</h4>
                            <h5 className="subheading">Dean (Students Affairs), SGGSIE&T</h5>
                        </Box>
                        <Box className="timeline-body"><p className="text-muted">Zenith is a state level sports event organized by the students of SGGSIE&T consisting of various sports like basketball, football, volleyball, etc. various teams from all over the state of Maharashtra compete to Devour the victory. In an all one of the best events in the state, with all the fun and enjoyment for complete 3 days.</p></Box>
                    </Box>
                </li>
                <li>
                    <Box className="timeline-image"><img className="rounded-circle img-fluid"src="zenith_web_2023/assets/img/Feedback/kadam.jpg" alt="..." /></Box>
                    <Box className="timeline-panel">
                        <Box className="timeline-heading text-white">
                            <h4>Prof. Bhaskar Kadam</h4>
                            <h5 className="subheading">Sports Incharge, SGGSIE&T</h5>
                        </Box>
                        <Box className="timeline-body"><p className="text-muted">As a sports incharge, it's my duty to encourage athletes to praticipate in such events.  This event is bound to enhance your gameplay and team synergy. So teams, get warmed-up and be ready to give it all you got!!</p></Box>
                    </Box>
                </li>
                <li className="timeline-inverted">
                    <Box className="timeline-image"><img className="rounded-circle img-fluid" src="zenith_web_2023/assets/img/Feedback/reddy.png" alt="..." /></Box>
                    <Box className="timeline-panel">
                        <Box className="timeline-heading text-white">
                            <h4>Late Prof. R. B. Reddy</h4>
                            <h5 className="subheading">Former Sports Incharge, SGGSIE&T</h5>
                        </Box>
                        <Box className="timeline-body"><p className="text-muted">The previous Sports Incharge of the institute who has helped all the student athletes in their preparation and has set the bar sky high. Under his guidance the sports level of the institute had elevated and SGGS became a force to be reckoned with. We hope to grow under the shadow of your blessings reddy sir😇</p></Box>
                    </Box>
                </li>
                <li className="timeline-inverted">
                    <Box className="timeline-image">
                        <h4>
                            Devour
                            <br />
                            The
                            <br />
                            Victory!
                        </h4>
                    </Box>
                </li>
            </ul>
        </Box>
    </section>
  );
}

export default Home5;
