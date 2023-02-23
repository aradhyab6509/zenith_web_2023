import React from "react";
import Box from '@mui/material/Box';


function Guest_detail(props) {
  console.log("demo");
  return (
    <Box class="portfolio-modal modal fade" id={props.id} tabindex="-1" role="dialog" aria-hidden="true">
        <Box class="modal-dialog">
            <Box class="modal-content">
                <Box class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></Box>
                <Box class="container">
                    <Box class="row justify-content-center">
                        <Box class="col-lg-8">
                            <Box class="modal-body">
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Threads
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Illustration
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>

  );
}

export default Guest_detail;
