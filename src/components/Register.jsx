import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Contact from './Partial/Footer/Contact';
import Map from './Partial/Footer/Map';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Register() {
  return (
    <Box id="footer">
    <Box class="bg-dark demo">
    <Box class="text-center">
        <h2 class="events_team_heading text-uppercase">Our Amazing Team</h2>
    </Box>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
          <Grid xs={4} container spacing={2}>
          <Grid item xs={12}>
            <Item><Contact /></Item>
          </Grid>
          <Grid item xs={12}>
            <Item><Map /></Item>
          </Grid>
        </Grid>

      </Grid>
    </Box>
    </Box>
  );
}
