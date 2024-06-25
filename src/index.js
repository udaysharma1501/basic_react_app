import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const mouses = [
  {
    id: 1,
    img_: "https://m.media-amazon.com/images/I/41OUcb1wLjL._AC_UY436_FMwebp_QL65_.jpg",
    name_: "Portronics Toad II Bluetooth Mouse",
    price_: "₹484",
  },
  {
    id: 2,
    img_: "https://m.media-amazon.com/images/I/41bEr2Oi3KL._SL1200_.jpg",
    name_: "Portronics Toad IV Bluetooth Mouse",
    price_: "₹596",
  },
  {
    id: 3,
    img_: "https://m.media-amazon.com/images/I/51Px+3MaXiL._SL1500_.jpg",
    name_: "Portronics Toad III Wireless Mouse ",
    price_: "₹578",
  },
];

function MouseList() {
  return (
    <div className="mouselist">
      {mouses.map((mouse) => {
        return (
          <div key={mouse.id}>
            <Mouse {...mouse}></Mouse>
          </div>
        );
      })}
    </div>
  );
}

let Mouse = ({ img_, name_, price_ }) => {
  // internal onClick function implementation - events can also be directly handled here only
  const clickHandler = (event) => {
    console.log(event);
    console.log(event.target);
    alert("button 1 was clicked");
  };

  const clickHandler_arg = (price) => {
    console.log(price);
  };

  return (
    // onMouseOver Event
    <div
      className="mouse"
      onMouseOver={() => {
        console.log("hovering over " + name_);
      }}
    >
      <img src={img_} alt="" />
      <br />
      {/* internal onClick function invocation*/}
      <button onClick={clickHandler}>button 1</button>
      <br />
      {/* inline onClick function */}
      <button onClick={() => console.log(name_)}>button 2</button>
      <h2>{name_}</h2>
      <h4>{price_}</h4>
      {/* passing an argument to an internally defined onClick function requires an arrow function inside onClick */}
      <button onClick={() => clickHandler_arg(price_)}>price button</button>
    </div>
  );
};

ReactDom.render(<MouseList />, document.getElementById("root"));
