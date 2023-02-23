import React from "react";
import Box from '@mui/material/Box';

function ListOf4(data) {
  return (
    <Box class="col-lg-3 col-md-6">
        <Box class="team-member">
            <img class="mx-auto rounded-circle" src={data.img} alt="..." />
            <h4>{data.name}</h4>
            <p class="text-muted">{data.desi}</p>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
        </Box>
    </Box>
  );
}

function ListOf3(data) {
  return (
    <Box class="col-lg-4 col-md-6">
        <Box class="team-member">
            <img class="mx-auto rounded-circle" src={data.img} alt="..." />
            <h4>{data.name}</h4>
            <p class="text-muted">{data.desi}</p>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
        </Box>
    </Box>
  );
}

function ListOf2(data) {
  return (
    <Box class="col-lg-6 col-md-6">
        <Box class="team-member">
            <img class="mx-auto rounded-circle" src={data.img} alt="..." />
            <h4>{data.name}</h4>
            <p class="text-muted">{data.desi}</p>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
        </Box>
    </Box>
  );
}

export {ListOf4};
export {ListOf3};
export {ListOf2};
