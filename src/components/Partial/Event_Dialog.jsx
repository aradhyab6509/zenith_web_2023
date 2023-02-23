import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="div">
            Toothbrush
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography>
        </Grid>
      </Grid>
      </DialogTitle>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>

        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>

      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button variant="outlined" color="error">Register</Button>
      </Box>
    </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Dialog_(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  console.log(props.img);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Details
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
