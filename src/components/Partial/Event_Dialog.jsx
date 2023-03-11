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
import Register from '../Register';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(data) {
  const { onClose, selectedValue, open } = data;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box className="dialog">
        <div className="Dialog_heading"><h2>{data.name}</h2></div>
        <hr className="Dialog_hr" />
        <div className="Dialog_div"><b>{data.price1}</b></div>
        <div className="Dialog_div"><b>{data.price2}</b></div>
        <hr className="Dialog_hr" />
        <div className="Dialog_div"><b>Rules: </b>{data.rules}</div>
        <div className="Dialog_div"><b>*</b>{data.note}</div>
        <hr className="Dialog_hr" />
        <div className="Dialog_div"><b>Contact: </b>{data.Contact}</div>
        <div className="Dialog_heading">
          <Button variant="contained" color="error" href="/Register">
            Register
          </Button><
        /div>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Dialog_(data) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
        View More
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        price1={data.price1}
        price2={data.price2}
        rules={data.rules}
        image={data.image}
        name={data.name}
        note={data.note}
        Contact={data.Contact}
      />
    </div>
  );
}
