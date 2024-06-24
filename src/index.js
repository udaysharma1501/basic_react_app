import React from "react";
import ReactDom from "react-dom";

// importing css file
import "./index.css";

// using objects instead of separate variables
const mouse1 = {
  img_: "https://m.media-amazon.com/images/I/41OUcb1wLjL._AC_UY436_FMwebp_QL65_.jpg",
  name_: "Portronics Toad II Bluetooth Mouse",
  price_: "₹484",
};
const mouse2 = {
  img_: "https://m.media-amazon.com/images/I/41bEr2Oi3KL._SL1200_.jpg",
  name_: "Portronics Toad IV Bluetooth Mouse",
  price_: "₹596",
};

function MouseList() {
  return (
    <div className="mouselist">
      <Mouse img_={mouse1.img_} name_={mouse1.name_} price_={mouse1.price_} />
      <Mouse img_={mouse2.img_} name_={mouse2.name_} price_={mouse2.price_} />
      <Mouse_alter
        img_={mouse2.img_}
        name_={mouse2.name_}
        price_={mouse2.price_}
      />
    </div>
  );
}

let Mouse = (props) => {
  return (
    <div className="mouse">
      <img src={props.img_} alt="" />
      <h2>{props.name_}</h2>
      <h4>{props.price_}</h4>
    </div>
  );
};
let Mouse_alter = (props) => {
  // destructuring props
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

/*
first example of props:

function MouseList() {
  return (
    <div className="mouselist">
      <Mouse first_obj="this is a prop obj" />
      <Mouse second_name="uday" second_age={18} />
    </div>
  );
}

let Mouse = (props) => {
  console.log(props);
  return (
    <div className="mouse">
      <Image></Image>
      <h2>{name_}</h2>
      <p>{props.first_obj}</p>
      <p>{props.second_name}</p>
      <h4>{price_}</h4>
    </div>
  );
};
*/
