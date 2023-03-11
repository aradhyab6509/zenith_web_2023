import React from "react";



function Guest_Entry(data) {
  return (
    <div className="guest_card">
      <div className="content">
        <div className="imgBx">
          <img src={data.img} />
        </div>
        <div className="contentBx">
          <h3>{data.name}<br /><span>{data.desi}</span><br />
            <span>{data.year}</span></h3>
        </div>
      </div>
    </div>
  );
}

export default Guest_Entry;
