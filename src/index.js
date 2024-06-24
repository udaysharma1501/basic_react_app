import React from "react";
import ReactDom from "react-dom";

// importing css file
import "./index.css";

// using list
const mouses = [
  {
    img_: "https://m.media-amazon.com/images/I/41OUcb1wLjL._AC_UY436_FMwebp_QL65_.jpg",
    name_: "Portronics Toad II Bluetooth Mouse",
    price_: "₹484",
  },
  {
    img_: "https://m.media-amazon.com/images/I/41bEr2Oi3KL._SL1200_.jpg",
    name_: "Portronics Toad IV Bluetooth Mouse",
    price_: "₹596",
  },
  {
    img_: "https://m.media-amazon.com/images/I/51Px+3MaXiL._SL1500_.jpg",
    name_: "Portronics Toad III Wireless Mouse ",
    price_: "₹578",
  },
];

function MouseList() {
  return (
    <div className="mouselist">
      {/* {mouses} - this wont work as objects cannot be accessed this way*/}
      {mouses.map((mouse) => {
        return (
          <div>
            {
              // but these have already been defined in the Mouse function down below
              /* <img src={img_} alt="" />
            <h2>{name_}</h2>
            <h4>{price_}</h4> */
            }
            <Mouse _mouse_={mouse}></Mouse>
          </div>
        );
      })}
    </div>
  );
}

// // example - array of stings can be passed instead of objects
// const strings = ["string 1 ", "string 2"];
// const newStrings = strings.map((string_) => {
//   return <h2>{string_}</h2>
// });

// function MouseList() {
//   return (<div className="mouselist">
//     {strings}
//     {newStrings}
//   </div>);
// }

let Mouse = (props) => {
  const { img_, name_, price_ } = props._mouse_;
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
