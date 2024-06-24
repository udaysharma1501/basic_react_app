import React from "react";
import ReactDom from "react-dom";

import "./index.css";

// Warning: Each child in a list should have a unique "key" prop. - soln - add unique id key for each item in list
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
          // key={mouse.id} prop should be directly on the top-level element returned by the map function
          <div key={mouse.id}>
            {/* <Mouse _mouse_={mouse}></Mouse> */}
            <Mouse {...mouse}></Mouse> {/* using the spread operator instead */}
          </div>
        );
      })}
    </div>
  );
}

let Mouse = (props) => {
  // const { img_, name_, price_ } = props._mouse_;
  const { img_, name_, price_ } = props;
  return (
    <div className="mouse">
      <img src={img_} alt="" />
      <h2>{name_}</h2>
      <h4>{price_}</h4>
    </div>
  );
};

ReactDom.render(<MouseList />, document.getElementById("root"));
