import * as React from 'react';

import Box from '@mui/material/Box';
import Dialog_ from "./Event_Dialog";

export default function Events_List(data) {
  return (
    <Box className="col-lg-3 cards">
    <a className="card css bg-light">
        <div className="cor__cobertura"></div>
        <div className="circulo">
          {data.img}
        </div>
        <h5>{data.name}</h5>
        <p className="dialog-content">{data.Price1}</p>
        <p className="dialog-content">{data.Price2}</p>
        <br />
        <Dialog_ name={data.name}
        image={data.image}
          rules={data.rules}
          price1={data.Price1}
          price2={data.Price2}
          note={data.note}
          Contact={data.Contact}/>
    </a>
    </Box>

  );
}
