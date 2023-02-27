import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog_ from "./Event_Dialog";

export default function Events_List(data) {
  return (
    <Box class="col-lg-3 cards">
    <a class="card css bg-light">
        <div class="cor__cobertura"></div>
        <div class="circulo">
          {data.img}
        </div>
        <p>{data.name}</p>
        <Dialog_ img={data.img}/>
    </a>
    </Box>

  );
}
