// index4.js - 02:09:00 onwards - props

import React from "react";
import ReactDom from "react-dom";

// importing css file
import "./index.css";

// all vars - can be declared here as well
let img_ =
  "https://m.media-amazon.com/images/I/41OUcb1wLjL._AC_UY436_FMwebp_QL65_.jpg";

function MouseList() {
  return (
    <div className="mouselist">
      <Mouse />
      <Mouse />
      <Mouse />
    </div>
  );
}

let price_ = "₹484";
let Mouse = () => {
  let name_ = "Portronics Toad II Bluetooth Mouse";
  return (
    <div className="mouse">
      <Image></Image>
      <h2>{name_.toLowerCase()}</h2>
      <h4>{price_}</h4>
      <p>{"must return sm: 6 + 4 is " + (parseInt(6) + parseInt(4))}</p>
    </div>
  );
};

let Image = () => {
  return <img src={img_} alt="" />;
};

ReactDom.render(<MouseList />, document.getElementById("root"));
