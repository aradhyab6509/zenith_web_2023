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
    <Box class="col-lg-4">
    <Card sx={{ maxWidth: 345 }} class="bg-light">
      <CardMedia
        component="img"
        height="140"
        image={data.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="Box">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <div class="row">
        <div class="col-7">
        <Dialog_ img={data.img}/>
        </div>
        <div class="col-5">
        <Button variant="outlined" color="error">Register</Button>
        </div>
        </div>

      </CardActions>
    </Card>


    </Box>

  );
}
