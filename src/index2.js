// index3.js - alternative way to declare variables 

import React from "react";
import ReactDom from "react-dom";

// importing css file
import "./index.css";

function MouseList() {
  return (
    <div className="mouselist">
      <Mouse />
      <Mouse />
      <Mouse />
      <Mouse />
      <Mouse />
      <Mouse />
    </div>
  );
}

let Mouse = () => {
  return (
    <div className="mouse">
      <Image></Image>
      <Name />
      <Price />
    </div>
  );
};

let Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41OUcb1wLjL._AC_UY436_FMwebp_QL65_.jpg"
      alt=""
    />
  );
};

let Name = () => {
  return <h2>Portronics Toad II Bluetooth Mouse</h2>;
};

let Price = () => {
  // adding inline css
  return <h3 style={{ letterSpacing: "10px", color: "blue" }}>₹484</h3>;
};

ReactDom.render(<MouseList />, document.getElementById("root"));

/*
index.css file

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    max-width: 50%;
    max-height: 50%;
    border: 2px solid black;
    border-radius: 15px;
}

body {
    background-color: thistle;
    font-family:'Courier New', Courier, monospace
}

h2,
h3 {
    color: rgb(39, 64, 39);
}

.mouselist {
    margin: 5rem 5rem;
    display: grid;
    gap: 2rem;
}

@media screen and (min-width: 768px) {
    .booklist {
        grid-template-columns: repeat(3, 1fr);
    }
}

.mouse{
    background-color: white;
    border-radius: 15px;
    padding: 5px;
}

*/
